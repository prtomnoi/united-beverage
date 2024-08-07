"use client";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import Link from "next/link";
import { useState } from "react";

const Vertification = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="bg-transparent border-none max-w-[1000px] !shadow-none">
        <div className="text-center space-y-20">
          <h1 className="text-white font-bold text-[20px] md:text-[25px] lg:text-[30px]">
            THIS WEBSITE REQUIRES YOU TO BE 20 YEARS OR OLDER TO ENTER
          </h1>
          <div className="flex gap-x-20 gap-y-8 flex-wrap justify-center font-bold text-[18px]">
            <Link
              href="https://www.google.com/"
              className="px-4 py-2 bg-white text-black hover:text-white hover:bg-black transition-all"
            >
              No, I'm not yet 20
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="px-4 py-2 bg-black text-white hover:text-black hover:bg-white transition-all"
            >
              Yes, I'm over 20
            </button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Vertification;
