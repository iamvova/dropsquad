"use client";
import React, { useState, useEffect } from 'react';

import Img1 from '@/public/images/ds/1.png'
import Img2 from '@/public/images/ds/2.png'
import Img3 from '@/public/images/ds/3.png'
import Img4 from '@/public/images/ds/4.png'
import Img5 from '@/public/images/ds/5.png'
import Img6 from '@/public/images/ds/6.png'
import Img7 from '@/public/images/ds/7.png'
import Img8 from '@/public/images/ds/8.png'
import Img9 from '@/public/images/ds/9.png'
import Img10 from '@/public/images/ds/10.png'

interface ImageData {
  src: string;
  alt: string;
  title: string;
}

interface ImageSliderProps {
  autoSlideInterval?: number;
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  autoSlideInterval = 5000,
  className = ""
}) => {
  // Масив з імпортованими зображеннями
  const images: ImageData[] = [
    {
      src: Img1.src,
      alt: "Зображення 1",
      title: "Перше зображення"
    },
    {
      src: Img2.src,
      alt: "Зображення 2",
      title: "Друге зображення"
    },
    {
      src: Img3.src,
      alt: "Зображення 3",
      title: "Третє зображення"
    },
    {
      src: Img4.src,
      alt: "Зображення 4",
      title: "Четверте зображення"
    },
    {
      src: Img5.src,
      alt: "Зображення 5",
      title: "П'яте зображення"
    },
    {
      src: Img6.src,
      alt: "Зображення 6",
      title: "Шосте зображення"
    },
    {
      src: Img7.src,
      alt: "Зображення 7",
      title: "Сьоме зображення"
    },
    {
      src: Img8.src,
      alt: "Зображення 8",
      title: "Восьме зображення"
    },
    {
      src: Img9.src,
      alt: "Зображення 9",
      title: "Дев'яте зображення"
    },
    {
      src: Img10.src,
      alt: "Зображення 10",
      title: "Десяте зображення"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Автоматичне циклічне перемикання слайдів (тільки коли не в повноекранному режимі)
  useEffect(() => {
    if (isFullscreen || images.length <= 1) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [isFullscreen, autoSlideInterval]);

  // Закриття повноекранного режиму по Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const nextSlide = (): void => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      return next >= images.length ? 0 : next;
    });
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => {
      const previous = prev - 1;
      return previous < 0 ? images.length - 1 : previous;
    });
  };

  const openFullscreen = (): void => {
    setIsFullscreen(true);
  };

  const closeFullscreen = (): void => {
    setIsFullscreen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      closeFullscreen();
    }
  };

  if (images.length === 0) {
    return (
      <div className={`flex justify-center pb-4 md:pb-12 ${className}`}>
        <div className="text-gray-500">Немає зображень для відображення</div>
      </div>
    );
  }

  return (
    <>
      <div className={`flex justify-center pb-4 md:pb-12 ${className}`} data-aos="fade-up">
        <div className="relative max-w-none overflow-hidden rounded-lg">
          {/* Контейнер для слайдів */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src={image.src}
                  width={1104}
                  height={384}
                  alt={image.alt}
                  style={{ width: '1104px', height: '384px' }}
                  onClick={openFullscreen}
                />
              </div>
            ))}
          </div>

          {/* Кнопки навігації (показувати тільки якщо більше 1 зображення) */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Попередній слайд"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Наступний слайд"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Індикатори слайдів (показувати тільки якщо більше 1 зображення) */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index 
                      ? 'bg-white scale-110' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Перейти до слайду ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Лічильник слайдів (показувати тільки якщо більше 1 зображення) */}
          {images.length > 1 && (
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentSlide + 1} / {images.length}
            </div>
          )}
        </div>
      </div>

      {/* Повноекранний режим */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={handleOverlayClick}
        >
          {/* Кнопка закриття */}
          <button
            onClick={closeFullscreen}
            className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Закрити повноекранний режим"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Повноекранне зображення */}
          <div className="relative max-w-full max-h-full">
            <img
              className="max-w-full max-h-full object-contain"
              src={images[currentSlide].src}
              alt={images[currentSlide].alt}
            />
            
            {/* Навігація в повноекранному режимі */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-200 hover:scale-110"
                  aria-label="Попередній слайд"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-200 hover:scale-110"
                  aria-label="Наступний слайд"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Індикатори в повноекранному режимі */}
            {images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-200 ${
                      currentSlide === index 
                        ? 'bg-white scale-110' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Перейти до слайду ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Лічильник в повноекранному режимі */}
            {images.length > 1 && (
              <div className="absolute top-6 right-6 bg-black/50 text-white px-4 py-2 rounded-full text-lg">
                {currentSlide + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageSlider;