'use client';
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";
import {Copyright} from "@mui/icons-material";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: 'spring' }}
    >
      {children}
      <footer className="content-center items-center text-center">
        Developed with Next.js <Copyright /> John Lazaro 2025
        <Link href={process.env.NEXT_PUBLIC_GITHUB as string} target="_blank">
          <Image height={50} width={50} alt='github logo' src='/github-mark-white.png' />
        </Link>
      </footer>
    </motion.main>
  );
}