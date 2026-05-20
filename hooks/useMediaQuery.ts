"use client";

import { useSyncExternalStore } from "react";

function subscribe(query: string, callback: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getSnapshot(query: string) {
  return window.matchMedia(query).matches;
}

function getServerSnapshot() {
  return false;
}

export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (callback) => subscribe(query, callback),
    () => getSnapshot(query),
    getServerSnapshot,
  );
}

export function useIsMobile() {
  return useMediaQuery("(max-width: 767px)");
}

export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
