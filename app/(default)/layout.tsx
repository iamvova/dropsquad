"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/ui/footer";

// Компонент кнопки прокрутки до форми
function ScrollToFormButton() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      // Показувати кнопку після прокрутки на 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Додаємо слухач події прокрутки
    window.addEventListener('scroll', toggleVisibility);
    
    // Очищуємо слухач при демонтажі компоненту
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToForm = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToForm}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-auto px-4 items-center justify-center rounded-full bg-gradient-to-t from-indigo-600 to-indigo-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 cursor-pointer"
          aria-label="Перейти до форми"
        >
          {/* Іконка конверта */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="ml-2 text-sm font-medium whitespace-nowrap">Залишити контакт</span>
        </button>
      )}
    </>
  );
}

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });
  
  return (
    <>
      <main className="relative flex grow flex-col">{children}</main>
      <Footer />
      <ScrollToFormButton />
    </>
  );
}