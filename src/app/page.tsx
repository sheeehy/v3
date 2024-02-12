"use client";
import { motion } from "framer-motion";

import Navbar from "./Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <h1 className="flex items-center  text-white justify-center text-8xl font-bold">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="flex flex-col items-center justify-center h-screen">
          Jack Sheehy
        </motion.h1>
      </h1>
    </main>
  );
}
