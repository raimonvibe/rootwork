"use client";

import { createPortal } from "react-dom";
import { useEffect, useState, type ReactNode } from "react";

type FixedViewportLayerProps = {
  children: ReactNode;
  className?: string;
  zIndex?: number;
};

/**
 * Renders children in a portal at the document root so fixed UI is not clipped
 * by scroll containers or broken by ancestor transforms (common on iOS Safari).
 */
export default function FixedViewportLayer({
  children,
  className = "",
  zIndex = 40,
}: FixedViewportLayerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`fixed-viewport-anchor pointer-events-none ${className}`.trim()}
      style={{ zIndex }}
    >
      {children}
    </div>,
    document.body,
  );
}
