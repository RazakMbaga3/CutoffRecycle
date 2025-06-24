"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function BrandPatternDivider({ 
  height = "h-32", 
  opacity = 0.1, 
  rotate = 0,
  direction = "left-to-right" // or "right-to-left"
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Create parallax effect based on scroll
  const x = direction === "left-to-right" 
    ? useTransform(scrollYProgress, [0, 1], ["-20%", "0%"])
    : useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  
  // Add subtle scale effect while scrolling
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  
  return (
    <div className={`w-full ${height} relative overflow-hidden my-12`} ref={ref}>
      <motion.div 
        className="absolute inset-0"
        style={{ 
          x,
          scale,
          rotate: rotate + "deg",
          opacity
        }}
      >
        <Image
          src="/Brand Assets/CutOff Pattern.svg"
          alt="Brand Pattern Divider"
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
