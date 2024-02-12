"use client";
import { motion } from "framer-motion";

export default function Heading() {
  return (
    <h1>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="flex flex-col items-center justify-center h-screen">
        Jack Sheehy
      </motion.h1>
    </h1>
  );
}
