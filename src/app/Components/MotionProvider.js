"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function MotionProvider({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page-global-fade"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 