"use client";

import { AnimatePresence, motion, MotionProps } from "motion/react";
import { useEffect, useState, useRef } from "react";

import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
  startDelay?: number;
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
  startDelay = 0,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, duration);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [words, duration, startDelay]);

  // Measure the width of all words to find the maximum
  useEffect(() => {
    if (measureRef.current) {
      let max = 0;
      words.forEach(word => {
        if (measureRef.current) {
          measureRef.current.textContent = word;
          const width = measureRef.current.getBoundingClientRect().width;
          max = Math.max(max, width);
        }
      });
      setMaxWidth(max);
    }
  }, [words, className]);

  return (
    <>
      {/* Hidden span to measure word widths */}
      <span
        ref={measureRef}
        className={cn("invisible absolute whitespace-nowrap", className)}
        style={{ top: -9999, left: -9999 }}
      />
      
      <span 
        className="relative inline-block align-baseline"
        style={{ minWidth: maxWidth || 'auto' }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            className={cn("inline-block", className)}
            {...motionProps}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}
