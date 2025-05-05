import React from 'react';
import overviewImg from './assets/ClientDashboard/overview.png';
import callsImg from './assets/ClientDashboard/calls.png';
import analyticsImg from './assets/ClientDashboard/analytics.png';
import planeImg from './assets/restaurant/plane.png';
import timelineImg from './assets/restaurant/timeline.png';

const clientDashboardImages = [
  {
    src: overviewImg,
    alt: 'Panel de control - Overview',
    desc: 'Vista general del panel de control del cliente, con métricas clave y suscripción activa.'
  },
  {
    src: callsImg,
    alt: 'Panel de control - Llamadas',
    desc: 'Sección de llamadas del bot principal, mostrando duración y número total de llamadas.'
  },
  {
    src: analyticsImg,
    alt: 'Panel de control - Analytics',
    desc: 'Análisis detallado de interacciones y rendimiento del bot en tiempo real.'
  }
];

const restaurantImages = [
  {
    src: planeImg,
    alt: 'Gestión de reservas',
    desc: 'Gestión inteligente y visual de reservas en restaurantes, optimizando la ocupación.'
  },
  {
    src: timelineImg,
    alt: 'Timeline de reservas',
    desc: 'Visualización en tiempo real del flujo de reservas y clientes en el restaurante.'
  }
];

import { useState } from 'react';

function ImageModal({ open, img, onClose }: { open: boolean, img: {src: string, alt: string} | null, onClose: () => void }) {
  if (!open || !img) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="relative max-w-3xl w-full px-4" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition">×</button>
        <img src={img.src} alt={img.alt} className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border-4 border-white" />
        <div className="text-center text-white mt-4 text-lg">{img.alt}</div>
      </div>
    </div>
  );
}

export function ControlPanelSection() {
  const [modalImg, setModalImg] = useState<{src: string, alt: string} | null>(null);
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-white">Nuestro Panel de Control</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {clientDashboardImages.map((img, idx) => (
          <div key={idx} className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <img src={img.src} alt={img.alt} className="rounded-xl mb-4 border border-gray-700 cursor-zoom-in transition hover:scale-105" onClick={() => setModalImg(img)} />
            <p className="text-gray-300 text-center">{img.desc}</p>
          </div>
        ))}
      </div>
      <ImageModal open={!!modalImg} img={modalImg} onClose={() => setModalImg(null)} />
    </div>
  );
}

export function RestaurantPanelSection() {
  const [modalImg, setModalImg] = useState<{src: string, alt: string} | null>(null);
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-white">Gestión Inteligente en Tiempo Real</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {restaurantImages.map((img, idx) => (
          <div key={idx} className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <img src={img.src} alt={img.alt} className="rounded-xl mb-4 border border-gray-700 cursor-zoom-in transition hover:scale-105" onClick={() => setModalImg(img)} />
            <p className="text-gray-300 text-center">{img.desc}</p>
          </div>
        ))}
      </div>
      <ImageModal open={!!modalImg} img={modalImg} onClose={() => setModalImg(null)} />
    </div>
  );
}
