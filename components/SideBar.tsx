"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { motion } from "framer-motion";
import { Flame, Home, Search } from "lucide-react";

export default function SideBar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Sheet open={true}>
      <SheetTrigger hidden={true}></SheetTrigger>
      <SheetContent
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        side="left"
        className="w-fit pr-20 grid min-h-screen grid-cols-1 bg-linear-to-r from-slate-900 text-slate-50 to-slate-500 via-slate-700"
      >
        <div className="flex justify-start items-center ml-15 gap-10">
          <Flame />
          {isHovered && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Flame
            </motion.h1>
          )}
        </div>
        <div className="flex justify-start items-center ml-15 gap-10">
          <Flame />
          {isHovered && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Flame again
            </motion.h1>
          )}
        </div>
        <div className="flex justify-start items-center ml-15 gap-10">
          <Home />
          {isHovered && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Home
            </motion.h1>
          )}
        </div>
        <div className="flex justify-start items-center ml-15 gap-10">
          <Search />
          {isHovered && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              search
            </motion.h1>
          )}
        </div>
        <div className="flex justify-start items-center ml-15 gap-10">
          <Home />
          {isHovered && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              another home
            </motion.h1>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
