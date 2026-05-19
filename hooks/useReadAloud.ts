"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  clearChunkHighlights,
  filterVoices,
  getReadableChunks,
  getSelectionChunk,
  highlightChunk,
  type ReadChunk,
} from "@/lib/readAloud";

export type ReadAloudStatus = "idle" | "playing" | "paused";

export type ReadMode = "page" | "selection";

export function useReadAloud() {
  const [status, setStatus] = useState<ReadAloudStatus>("idle");
  const [chunks, setChunks] = useState<ReadChunk[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [volume, setVolume] = useState(1);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceURI, setVoiceURI] = useState("");
  const [mode, setMode] = useState<ReadMode>("page");
  const [supported, setSupported] = useState(true);

  const chunksRef = useRef<ReadChunk[]>([]);
  const indexRef = useRef(0);
  const mainRef = useRef<HTMLElement | null>(null);

  const loadVoices = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const list = filterVoices(window.speechSynthesis.getVoices());
    setVoices(list);
    if (list.length && !voiceURI) {
      setVoiceURI(list[0].voiceURI);
    }
  }, [voiceURI]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.speechSynthesis) {
      setSupported(false);
      return;
    }
    mainRef.current = document.getElementById("main-content");
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
      window.speechSynthesis.cancel();
    };
  }, [loadVoices]);

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel();
    if (mainRef.current) clearChunkHighlights(mainRef.current);
    setStatus("idle");
    setCurrentIndex(0);
    indexRef.current = 0;
    chunksRef.current = [];
    setChunks([]);
  }, []);

  const speakChunk = useCallback(
    (index: number) => {
      const list = chunksRef.current;
      if (!list.length || index >= list.length) {
        stop();
        return;
      }

      const chunk = list[index];
      indexRef.current = index;
      setCurrentIndex(index);
      highlightChunk(chunk.element);

      const utterance = new SpeechSynthesisUtterance(chunk.text);
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = volume;

      const voice = voices.find((v) => v.voiceURI === voiceURI);
      if (voice) utterance.voice = voice;

      utterance.onend = () => {
        if (window.speechSynthesis.paused) return;
        speakChunk(index + 1);
      };

      utterance.onerror = () => {
        if (index < list.length - 1) speakChunk(index + 1);
        else stop();
      };

      window.speechSynthesis.speak(utterance);
      setStatus("playing");
    },
    [rate, pitch, volume, voices, voiceURI, stop],
  );

  const start = useCallback(
    (readMode: ReadMode = "page") => {
      if (!supported || !mainRef.current) return;

      window.speechSynthesis.cancel();
      clearChunkHighlights(mainRef.current);

      let list: ReadChunk[] = [];
      if (readMode === "selection") {
        const selected = getSelectionChunk();
        if (selected) list = [selected];
        else readMode = "page";
      }

      if (readMode === "page") {
        list = getReadableChunks(mainRef.current);
      }

      if (!list.length) return;

      setMode(readMode);
      chunksRef.current = list;
      setChunks(list);
      indexRef.current = 0;
      setCurrentIndex(0);
      speakChunk(0);
    },
    [supported, speakChunk],
  );

  const pause = useCallback(() => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setStatus("paused");
    }
  }, []);

  const resume = useCallback(() => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setStatus("playing");
    }
  }, []);

  const togglePlayPause = useCallback(() => {
    if (status === "playing") pause();
    else if (status === "paused") resume();
    else start(mode);
  }, [status, pause, resume, start, mode]);

  const skip = useCallback(
    (delta: number) => {
      const next = indexRef.current + delta;
      if (next < 0 || next >= chunksRef.current.length) return;
      window.speechSynthesis.cancel();
      speakChunk(next);
    },
    [speakChunk],
  );

  const progress =
    chunks.length > 0 ? ((currentIndex + 1) / chunks.length) * 100 : 0;

  return {
    supported,
    status,
    chunks,
    currentIndex,
    progress,
    rate,
    setRate,
    pitch,
    setPitch,
    volume,
    setVolume,
    voices,
    voiceURI,
    setVoiceURI,
    mode,
    start,
    stop,
    pause,
    resume,
    togglePlayPause,
    skip,
  };
}
