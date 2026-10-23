"use client";

import { useRef, type ReactNode } from "react";

export function MobileMenu({ label, navigationLabel, children }: { label: string; navigationLabel: string; children: ReactNode }) {
  const menu = useRef<HTMLDetailsElement>(null);
  const toggle = useRef<HTMLElement>(null);

  return (
    <details
      className="mobile-menu"
      ref={menu}
      onClick={(event) => {
        if (event.target instanceof Element && event.target.closest("a") && menu.current) {
          menu.current.open = false;
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menu.current) {
          menu.current.open = false;
          toggle.current?.focus();
        }
      }}
    >
      <summary ref={toggle}>{label}<span aria-hidden="true">☰</span></summary>
      <nav aria-label={navigationLabel}>{children}</nav>
    </details>
  );
}
