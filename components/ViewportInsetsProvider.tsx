"use client";

import { useFixedViewportInsets } from "@/hooks/useFixedViewportInsets";

/** Mount once in the root layout so fixed overlays can use --vv-* CSS variables. */
export default function ViewportInsetsProvider() {
  useFixedViewportInsets();
  return null;
}
