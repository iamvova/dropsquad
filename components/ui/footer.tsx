import Logo from "./logo";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Telegram from "@/public/images/telegram.svg";
import YT from "@/public/images/youtube.svg";
import Inst from "@/public/images/instagram.svg";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
        </div>
        <div className="flex justify-between items-end py-8">
          {/* 1st block */}
          <div className="justify-self-star space-y-2">
            <h3 className="text-sm font-medium flex items-center mb-6" ><Image src={logo} alt="Cruip Logo" width={34} height={34} /> <p className="pl-4 text-lg hover:opacity-80 cursor-pointer">DROPSQUAD</p></h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://drive.google.com/drive/folders/15vaZ6zGgpEa5Xb0Fi7CvKmcaZ7kcM4HA?usp=sharing"
                > Mediakit
              
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://dashboard.dropsquad.com.ua/assets/politic/DropSquad.pdf"
                > Політика конфіденційності 
              
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="justify-self-end col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            
            <div className="text-sm">
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
              <p className="mb-3 text-indigo-200/65 pt-2">
                © Dropsquad 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
