"use client";

import Spline from "@splinetool/react-spline";

import { motion } from "framer-motion";

import Navbar from "./Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <div className="flex items-center justify-center ">
        <Spline scene="https://prod.spline.design/z21OSm9K7llDDogp/scene.splinecode" className="flex items-center justify-center" />
      </div>
    </main>
  );
}
