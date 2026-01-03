"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import iconZ from "@/assets/icon-zalo.png";
import iconM from "@/assets/icon-mess.png";
import iconP from "@/assets/iconP.png";
export default function FloatingChat() {
  return (
    <div className="fixed right-4 md:right-6 bottom-20 md:bottom-8 z-[9999] flex flex-col gap-4">
      {/* 📞 CALL */}
      <motion.a
        href="tel:0975416999"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#ffbf00] flex items-center justify-center shadow-lg"
        aria-label="Gọi điện"
      >
        {/* Pulse */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#ffbf00]/60" />

        <img
          src={iconP}
          alt="Gọi Phone"
          width={40}
          height={40}
          className="relative z-10"
        />
      </motion.a>

      {/* ZALO */}
      <motion.a
        href="https://zalo.me/0975416999"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#ffbf00] flex items-center justify-center shadow-lg"
        aria-label="Chat Zalo"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-[#ffbf00]/60" />

        <img
          src={iconZ}
          alt="Chat Zalo"
          width={40}
          height={40}
          className="relative z-10"
        />
      </motion.a>

      {/* FACEBOOK MESSENGER */}
      <motion.a
        href="https://m.me/61578674345307"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#ffbf00] flex items-center justify-center shadow-lg"
        aria-label="Chat Messenger"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-[#ffbf00]/60" />

        <img
          src={iconM}
          alt="Chat Messenger"
          width={40}
          height={40}
          className="relative z-10"
        />
      </motion.a>
    </div>
  );
}
