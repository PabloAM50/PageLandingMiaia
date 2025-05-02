import React from 'react';
import { Mail } from 'lucide-react';

const Email = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <Mail className="w-12 h-12 text-blue-400" />
          <h1 className="text-4xl font-bold">Envíanos un correo</h1>
        </div>
        <p className="text-xl text-gray-300">
          Envíanos un correo electrónico y nuestra secretaria IA lo procesará para 
          programar tu consulta. Te responderemos con opciones personalizadas y 
          los siguientes pasos para comenzar tu transformación digital con IA.
        </p>
      </div>
    </div>
  );
};

export default Email;