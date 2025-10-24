"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function SideBar() {
  return (
    <Sheet open={true}>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent
        side="left"
        className="w-[400px] sm:w-[540px]"
      ></SheetContent>
    </Sheet>
  );
}
