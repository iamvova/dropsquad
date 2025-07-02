"use client";

import Link from "next/link";
import Logo from "./logo";
import Telegram from "@/public/images/telegram.svg";
import YT from "@/public/images/youtube.svg";
import Inst from "@/public/images/instagram.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <div className="flex flex-1 items-center justify-end gap-3">
            <ul className="inline-flex gap-3 items-center">
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="https://t.me/drop_squad"
                    aria-label="TG"
                  >
                    
                    <Image src={Telegram} alt="Cruip Logo" width={28} height={28}/>

                  </a>
                </li>


              <li>
                <a
                  className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                  href="https://www.instagram.com/drop_squad_crypto"
                  aria-label="Instagram"
                >
                    <Image src={Inst} alt="Cruip Logo" width={28} height={28}/>
                  
                </a>
              </li>
              <li>
                  <a className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400" href="https://www.youtube.com/@DropSquad-crypto" aria-label="YouTube">
                    <Image src={YT} alt="Cruip Logo" width={32} height={32}/>
                  </a>
                </li>
               
              </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
