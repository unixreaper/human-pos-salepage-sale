"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./reveal.module.css";

type RevealVariant = "rise" | "pop" | "fade" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  once?: boolean;
  immediate?: boolean;
};

const variantClass: Record<RevealVariant, string> = {
  rise: styles.rise,
  pop: styles.pop,
  fade: styles.fade,
  left: styles.left,
  right: styles.right,
};

export function Reveal({
  children,
  className = "",
  variant = "rise",
  delay = 0,
  once = true,
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (immediate) {
      const timer = window.setTimeout(() => setVisible(true), delay);
      return () => window.clearTimeout(timer);
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setVisible(true);

        if (once) {
          observer.disconnect();
        }
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, immediate, once]);

  return (
    <div
      ref={ref}
      className={[
        styles.reveal,
        variantClass[variant],
        visible ? styles.visible : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={immediate ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
