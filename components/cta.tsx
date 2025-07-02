"use client";
import { useState } from "react";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import emailjs from '@emailjs/browser';

export default function Cta() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      setMessage('Будь ласка, заповніть обов\'язкові поля');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Відправка через EmailJS
      await emailjs.send(
        'service_wx8ydsc', // Замініть на ваш Service ID
        'template_0ck1occ', // Замініть на ваш Template ID
        {
          to_email: 'mxneykiller@gmail.com', // Наша пошта
          from_name: formData.name,
          from_email: formData.email,
          telegram: formData.telegram,
          message: `Нова заявка від ${formData.name}\nEmail: ${formData.email}\nTelegram: ${formData.telegram}`
        },
        'DAA5V80Ti29KtpvlS' // Замініть на ваш Public Key
      );

      setMessage('Повідомлення успішно надіслано!');
      setFormData({ name: '', email: '', telegram: '' });
    } catch (error) {
      console.error('Помилка відправки:', error);
      setMessage('Помилка при відправці. Спробуйте ще раз.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden" id="form">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Щоб отримати деталі ти можеш звʼязатися з нами залишивши свої контакти
            </h2>
            <form className="space-y-4 text-left" data-aos="fade-up" data-aos-delay={400} onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ім'я*"
                  required
                  className="mb-4 w-full rounded-2xl border border-gray-700 bg-gray-900/70 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:mb-0"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  required
                  className="w-full rounded-2xl border border-gray-700 bg-gray-900/70 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <input
                type="text"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                placeholder="Телеграм"
                className="w-full rounded-2xl border border-gray-700 bg-gray-900/70 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              
              {message && (
                <div className={`text-center p-3 rounded-lg ${message.includes('успішно') ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Надсилання...' : 'Отримати пропозицію'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}