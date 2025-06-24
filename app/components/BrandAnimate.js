"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Floating Brand Icons
export const FloatingIcons = ({ count = 5, opacity = 0.2 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity, scale: 0.6 + Math.random() * 0.8 }}
          animate={{
            x: [
              -20 + Math.random() * 40, 
              20 + Math.random() * 40, 
              -20 + Math.random() * 40
            ],
            y: [
              -20 + Math.random() * 40, 
              20 + Math.random() * 40, 
              -20 + Math.random() * 40
            ],
            rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
            scale: [
              0.6 + Math.random() * 0.4,
              0.8 + Math.random() * 0.4,
              0.6 + Math.random() * 0.4
            ],
          }}
          transition={{
            duration: 15 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image
            src="/Brand Assets/CutOff-Icon.png"
            alt="CutOff Icon"
            width={60}
            height={60}
            className={`opacity-${Math.round(opacity * 100)}`}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Dynamic Pattern Background
export const PatternBackground = ({ 
  position = "right-0 top-0", 
  size = "w-1/3 h-screen",
  opacity = [0.1, 0.2, 0.1],
  animation = "wave" // "wave", "pulse", "breathe", "rotate"
}) => {
  const getAnimation = () => {
    switch(animation) {
      case "wave":
        return {
          animate: { 
            backgroundPositionY: ["0%", "100%"],
            opacity
          },
          transition: {
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
          }
        };
      case "pulse":
        return {
          animate: { 
            scale: [1, 1.05, 1],
            opacity
          },
          transition: {
            duration: 8,
            repeat: Infinity,
          }
        };
      case "breathe":
        return {
          animate: { 
            opacity,
            filter: ["blur(2px)", "blur(0px)", "blur(2px)"]
          },
          transition: {
            duration: 10,
            repeat: Infinity,
          }
        };
      case "rotate":
        return {
          animate: { 
            rotate: [0, 360],
            opacity
          },
          transition: {
            duration: 120,
            repeat: Infinity,
            ease: "linear"
          }
        };
      default:
        return {
          animate: { opacity },
          transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }
        };
    }
  };
  
  const { animate, transition } = getAnimation();
  
  return (
    <motion.div 
      className={`absolute ${position} ${size} z-0`}
      style={{ 
        background: `url('/Brand Assets/CutOff Pattern.svg')`,
        backgroundSize: "cover"
      }}
      initial={{ opacity: 0 }}
      animate={animate}
      transition={transition}
    />
  );
};

// Dancing Brand Element
export const DancingBrand = ({ position = "bottom-10 right-10" }) => {
  return (
    <motion.div
      className={`absolute ${position} z-10`}
      animate={{
        y: [0, -15, 0, -5, 0],
        scale: [1, 1.1, 1, 1.05, 1],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Image
        src="/Brand Assets/CutOff-Icon.png"
        alt="CutOff Icon"
        width={80}
        height={80}
        className="drop-shadow-xl"
      />
    </motion.div>
  );
};

// Pulsing Brand Border
export const PulsingBrandBorder = ({ children, intensity = "medium" }) => {
  const intensityMap = {
    light: { shadow: "0 0 20px", opacity: [0.3, 0.6, 0.3] },
    medium: { shadow: "0 0 30px", opacity: [0.4, 0.7, 0.4] },
    strong: { shadow: "0 0 40px", opacity: [0.5, 0.8, 0.5] },
  };
  
  const { shadow, opacity } = intensityMap[intensity] || intensityMap.medium;
  
  return (
    <div className="relative">
      <motion.div
        className="absolute inset-0 rounded-3xl"
        animate={{
          boxShadow: [
            `${shadow} rgba(80, 173, 50, ${opacity[0]})`,
            `${shadow} rgba(80, 173, 50, ${opacity[1]})`,
            `${shadow} rgba(80, 173, 50, ${opacity[0]})`
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {children}
    </div>
  );
};
