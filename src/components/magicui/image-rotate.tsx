"use client";

import { AnimatePresence, motion, MotionProps } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface ImageRotateProps {
  images: { src: string; alt: string }[];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
  startDelay?: number;
  imageWidth?: number;
  imageHeight?: number;
}

export function ImageRotate({
  images,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  className,
  startDelay = 0,
  imageWidth = 150,
  imageHeight = 150,
}: ImageRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, duration);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [images, duration, startDelay]);

  return (
    <div className="relative inline-block">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index].src}
          className={cn("inline-block", className)}
          {...motionProps}
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            width={imageWidth}
            height={imageHeight}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
