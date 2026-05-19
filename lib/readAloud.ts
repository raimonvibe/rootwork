export type ReadChunk = {
  index: number;
  text: string;
  element: HTMLElement;
};

const READABLE_SELECTOR =
  "h1, h2, h3, h4, p, li, blockquote, [data-read-aloud]";

const IGNORE_SELECTOR = "[data-read-aloud-ignore], nav, footer, button, a";

export function getReadableChunks(root: HTMLElement): ReadChunk[] {
  const elements = Array.from(
    root.querySelectorAll<HTMLElement>(READABLE_SELECTOR),
  ).filter((el) => {
    if (el.closest(IGNORE_SELECTOR)) return false;
    const text = el.innerText.replace(/\s+/g, " ").trim();
    return text.length > 0;
  });

  return elements.map((element, index) => ({
    index,
    element,
    text: element.innerText.replace(/\s+/g, " ").trim(),
  }));
}

export function getSelectionChunk(): ReadChunk | null {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return null;

  const text = selection.toString().replace(/\s+/g, " ").trim();
  if (!text) return null;

  const anchor = selection.anchorNode?.parentElement;
  const element =
    anchor?.closest<HTMLElement>(READABLE_SELECTOR) ?? document.createElement("p");

  return { index: 0, text, element };
}

export function clearChunkHighlights(root: HTMLElement) {
  root.querySelectorAll("[data-read-chunk-active]").forEach((el) => {
    el.removeAttribute("data-read-chunk-active");
    el.classList.remove("read-aloud-active");
  });
}

export function highlightChunk(element: HTMLElement) {
  clearChunkHighlights(
    element.closest("main") ?? document.getElementById("main-content")!,
  );
  element.setAttribute("data-read-chunk-active", "true");
  element.classList.add("read-aloud-active");
  element.scrollIntoView({ behavior: "smooth", block: "center" });
}

export function filterVoices(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice[] {
  const english = voices.filter((v) => v.lang.startsWith("en"));
  const pool = english.length > 0 ? english : voices;

  return [...pool].sort((a, b) => {
    const score = (v: SpeechSynthesisVoice) => {
      let s = 0;
      if (v.localService) s += 2;
      if (/natural|premium|enhanced|google/i.test(v.name)) s += 3;
      if (v.default) s += 1;
      return s;
    };
    return score(b) - score(a);
  });
}

export function formatVoiceLabel(voice: SpeechSynthesisVoice): string {
  const lang = voice.lang.replace("_", "-");
  const tag = voice.localService ? "Local" : "Network";
  return `${voice.name} (${lang}, ${tag})`;
}
