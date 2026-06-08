import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 800); // Allow fade out animation
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-[#0a0e27]"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative w-full max-w-4xl px-4">
            <svg viewBox="0 0 1000 300" className="w-full h-auto overflow-visible">
              <defs>
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              
              {/* Outline Path Drawing */}
              <motion.text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="text-[120px] font-['Great_Vibes']"
                fill="none"
                stroke="url(#textGradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 1,
                }}
                transition={{ 
                  duration: 2.5, 
                  ease: "easeInOut",
                  pathLength: { duration: 2.5, ease: "easeInOut" },
                  opacity: { duration: 0.5 }
                }}
                style={{
                  strokeDasharray: 500,
                  strokeDashoffset: 500,
                  animation: 'draw 2.5s ease-in-out forwards'
                }}
              >
                Chandrika M
              </motion.text>

              {/* Color Fill Animation */}
              <motion.text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="text-[120px] font-['Great_Vibes']"
                fill="url(#textGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1.5, ease: "easeIn" }}
              >
                Chandrika M
              </motion.text>
            </svg>

            {/* Subtitle with fade up */}
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 2.2, duration: 1 }}
            >
              <p className="text-gray-500 dark:text-blue-300 font-medium tracking-[0.3em] uppercase text-xs">
                Crafting Digital Excellence
              </p>
            </motion.div>
          </div>

          <style jsx>{`
            @keyframes draw {
              from {
                stroke-dashoffset: 500;
              }
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
