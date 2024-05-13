"use client";

import {
  HeroHighlight,
  Highlight,
} from "@/components/aceternity/hero-highlight";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaBilibili, FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-xl px-4 md:text-4xl lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          <p className="py-2">👋 你好</p>
          <p className="py-2">😯 我是 Alisa</p>
          <p className="py-2">
            🚧 网站正在
            <Highlight className="text-black dark:text-white">建设中</Highlight>
          </p>
          <p className="py-2">⬇️ 你可以先看看别处哦</p>
          <ul className="py-2 flex items-center justify-center gap-4">
            <li>
              <a
                href="https://space.bilibili.com/5627849"
                target="_blank"
                rel="noreferer"
              >
                <Button variant="outline" size="icon" className="rounded-full">
                  <FaBilibili className="w-6 h-6" />
                </Button>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/LiamSho"
                target="_blank"
                rel="noreferer"
              >
                <Button variant="outline" size="icon" className="rounded-full">
                  <FaGithub className="w-6 h-6" />
                </Button>
              </a>
            </li>
            <li>
              <a href="mailto:alisaqaq.moe" target="_blank" rel="noreferer">
                <Button variant="outline" size="icon" className="rounded-full">
                  <MdOutlineEmail className="w-6 h-6" />
                </Button>
              </a>
            </li>
          </ul>
        </motion.h1>
      </HeroHighlight>
    </main>
  );
}
