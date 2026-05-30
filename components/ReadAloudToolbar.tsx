"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Gauge,
  Mic,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Square,
  Volume2,
  X,
} from "lucide-react";
import FixedViewportLayer from "@/components/FixedViewportLayer";
import { useReadAloud } from "@/hooks/useReadAloud";
import { formatVoiceLabel } from "@/lib/readAloud";

const SPEEDS = [0.75, 1, 1.25, 1.5];

export default function ReadAloudToolbar() {
  const [open, setOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const {
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
    togglePlayPause,
    skip,
  } = useReadAloud();

  const isActive = status === "playing" || status === "paused";

  useEffect(() => {
    if (!isActive) {
      setStatusMessage("");
      return;
    }
    if (chunks.length === 0) return;
    setStatusMessage(
      `Reading section ${currentIndex + 1} of ${chunks.length}${mode === "selection" ? " (selection)" : ""}`,
    );
  }, [isActive, chunks.length, currentIndex, mode]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === "r") {
        e.preventDefault();
        setOpen(true);
        if (status === "idle") start("page");
        else togglePlayPause();
      }
      if (e.altKey && e.key === "s") {
        e.preventDefault();
        stop();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [start, stop, togglePlayPause, status]);

  if (!supported) return null;

  return (
    <FixedViewportLayer
      className="flex flex-col items-end gap-3 sm:bottom-6 sm:right-6 [&>*]:pointer-events-auto"
    >
      <div data-read-aloud-ignore className="contents">
      <div role="status" aria-live="polite" className="sr-only">
        {statusMessage}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="fixed-viewport-panel overflow-hidden rounded-card border border-root-dark/10 bg-white/95 shadow-[0_8px_40px_rgba(26,26,46,0.18)] backdrop-blur-xl"
            role="region"
            aria-label="Listen to this page"
          >
            <div className="gradient-navy px-4 py-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-5 w-5 text-root-light" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-root-light">Listen</p>
                    <p className="text-xs text-root-light/70">
                      Powered by your browser
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex min-h-10 min-w-10 items-center justify-center rounded-full text-root-light/80 transition-smooth hover:bg-white/10"
                  aria-label="Close listen panel"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {isActive && (
                <div
                  className="mt-3 flex h-6 items-end justify-center gap-1"
                  aria-hidden
                >
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1 rounded-full bg-root-coral"
                      animate={
                        status === "playing"
                          ? { height: ["8px", "22px", "10px", "18px", "8px"] }
                          : { height: "8px" }
                      }
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        delay: i * 0.12,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-4 p-4">
              {isActive && (
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-root-dark/60">
                    <span>Progress</span>
                    <span>
                      {chunks.length > 0
                        ? `${currentIndex + 1} / ${chunks.length}`
                        : "—"}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-root-dark/10">
                    <div
                      className="h-full gradient-accent transition-all duration-300"
                      style={{ width: `${progress}%` }}
                      role="progressbar"
                      aria-valuenow={Math.round(progress)}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => skip(-1)}
                  disabled={!isActive || currentIndex === 0}
                  className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-root-dark/10 text-root-dark transition-smooth hover:border-root-coral/40 disabled:opacity-40"
                  aria-label="Previous section"
                >
                  <SkipBack className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={togglePlayPause}
                  className="flex min-h-14 min-w-14 items-center justify-center rounded-full gradient-accent text-white shadow-card transition-smooth hover:opacity-90"
                  aria-label={
                    status === "playing"
                      ? "Pause reading"
                      : status === "paused"
                        ? "Resume reading"
                        : "Start reading page"
                  }
                >
                  {status === "playing" ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6 translate-x-0.5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => skip(1)}
                  disabled={!isActive || currentIndex >= chunks.length - 1}
                  className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-root-dark/10 text-root-dark transition-smooth hover:border-root-coral/40 disabled:opacity-40"
                  aria-label="Next section"
                >
                  <SkipForward className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={stop}
                  disabled={!isActive}
                  className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-root-dark/10 text-root-dark transition-smooth hover:border-root-coral/40 disabled:opacity-40"
                  aria-label="Stop reading"
                >
                  <Square className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (isActive) stop();
                    window.setTimeout(() => start("page"), isActive ? 100 : 0);
                  }}
                  className={`min-h-11 rounded-card px-3 text-xs font-medium transition-smooth ${
                    mode === "page" && isActive
                      ? "gradient-accent text-white"
                      : "border border-root-dark/10 bg-root-surface text-root-dark hover:border-root-coral/30"
                  }`}
                >
                  Read full page
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (isActive) stop();
                    window.setTimeout(() => start("selection"), isActive ? 100 : 0);
                  }}
                  className={`min-h-11 rounded-card px-3 text-xs font-medium transition-smooth ${
                    mode === "selection" && isActive
                      ? "gradient-accent text-white"
                      : "border border-root-dark/10 bg-root-surface text-root-dark hover:border-root-coral/30"
                  }`}
                >
                  Read selection
                </button>
              </div>

              <div className="space-y-3 border-t border-root-dark/5 pt-3">
                <label className="block">
                  <span className="mb-1 flex items-center gap-1 text-xs font-medium text-root-dark/70">
                    <Gauge className="h-3.5 w-3.5" />
                    Speed
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {SPEEDS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setRate(s)}
                        className={`min-h-9 min-w-[3rem] rounded-lg px-2 text-xs font-medium transition-smooth ${
                          rate === s
                            ? "bg-root-dark text-root-light"
                            : "bg-root-dark/5 text-root-dark hover:bg-root-dark/10"
                        }`}
                      >
                        {s}×
                      </button>
                    ))}
                  </div>
                </label>

                <label className="block">
                  <span className="mb-1 text-xs font-medium text-root-dark/70">
                    Voice
                  </span>
                  <select
                    value={voiceURI}
                    onChange={(e) => setVoiceURI(e.target.value)}
                    className="w-full min-h-11 rounded-card border border-root-dark/10 bg-white px-3 text-xs text-root-dark focus:border-root-coral focus:outline-none focus:ring-2 focus:ring-root-coral/20"
                    aria-label="Reading voice"
                  >
                    {voices.map((v) => (
                      <option key={v.voiceURI} value={v.voiceURI}>
                        {formatVoiceLabel(v)}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1 flex justify-between text-xs font-medium text-root-dark/70">
                    <span>Pitch</span>
                    <span>{pitch.toFixed(1)}</span>
                  </span>
                  <input
                    type="range"
                    min={0.5}
                    max={1.5}
                    step={0.1}
                    value={pitch}
                    onChange={(e) => setPitch(Number(e.target.value))}
                    className="w-full accent-root-coral"
                    aria-label="Voice pitch"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 flex justify-between text-xs font-medium text-root-dark/70">
                    <span>Volume</span>
                    <span>{Math.round(volume * 100)}%</span>
                  </span>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full accent-root-coral"
                    aria-label="Volume"
                  />
                </label>
              </div>

              <p className="text-center text-[10px] leading-relaxed text-root-dark/45">
                Highlight text first for &ldquo;Read selection&rdquo;. Shortcuts: Alt+R
                play/pause · Alt+S stop
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`group relative flex min-h-14 min-w-14 items-center justify-center rounded-full shadow-[0_6px_28px_rgba(233,69,96,0.35)] transition-smooth sm:min-h-16 sm:min-w-16 ${
          isActive ? "gradient-accent" : "gradient-navy"
        }`}
        aria-expanded={open}
        aria-label={open ? "Close listen controls" : "Open listen controls"}
      >
        {isActive && status === "playing" && (
          <span
            className="absolute inset-0 animate-ping rounded-full bg-root-coral/30"
            aria-hidden
          />
        )}
        {status === "playing" ? (
          <Pause className="relative h-6 w-6 text-white" />
        ) : status === "paused" ? (
          <Play className="relative h-6 w-6 translate-x-0.5 text-white" />
        ) : (
          <Mic className="relative h-6 w-6 text-root-light transition-transform group-hover:scale-105" />
        )}
        <span className="absolute -right-1 -top-1 flex h-5 items-center rounded-full bg-white px-1.5 text-[9px] font-bold uppercase tracking-wide text-root-coral shadow-sm">
          Listen
        </span>
      </motion.button>
      </div>
    </FixedViewportLayer>
  );
}
