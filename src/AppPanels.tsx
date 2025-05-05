import React from 'react';

const clientDashboardImages = [
  {
    src: require('./assets/ClientDashboard/overview.png'),
    alt: 'Panel de control - Overview',
    desc: 'Vista general del panel de control del cliente, con métricas clave y suscripción activa.'
  },
  {
    src: require('./assets/ClientDashboard/calls.png'),
    alt: 'Panel de control - Llamadas',
    desc: 'Sección de llamadas del bot principal, mostrando duración y número total de llamadas.'
  },
  {
    src: require('./assets/ClientDashboard/analytics.png'),
    alt: 'Panel de control - Analytics',
    desc: 'Análisis detallado de interacciones y rendimiento del bot en tiempo real.'
  }
];

const restaurantImages = [
  {
    src: require('./assets/restaurant/plane.png'),
    alt: 'Gestión de reservas',
    desc: 'Gestión inteligente y visual de reservas en restaurantes, optimizando la ocupación.'
  },
  {
    src: require('./assets/restaurant/timeline.png'),
    alt: 'Timeline de reservas',
    desc: 'Visualización en tiempo real del flujo de reservas y clientes en el restaurante.'
  }
];

export function ControlPanelSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-white">Nuestro Panel de Control</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {clientDashboardImages.map((img, idx) => (
          <div key={idx} className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <img src={img.src} alt={img.alt} className="rounded-xl mb-4 border border-gray-700" />
            <p className="text-gray-300 text-center">{img.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RestaurantPanelSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-white">Gestión Inteligente en Tiempo Real</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {restaurantImages.map((img, idx) => (
          <div key={idx} className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <img src={img.src} alt={img.alt} className="rounded-xl mb-4 border border-gray-700" />
            <p className="text-gray-300 text-center">{img.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
