import React from 'react';
import { Bot } from 'lucide-react';

const VoiceAI = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <Bot className="w-12 h-12 text-blue-400" />
          <h1 className="text-4xl font-bold">Habla con nuestra secretaria IA</h1>
        </div>
        <p className="text-xl text-gray-300">
          Aquí podrás hablar directamente con nuestra secretaria IA para conocer nuestros productos y servicios. 
          Nuestra asistente virtual está capacitada para responder todas tus preguntas y ayudarte a encontrar 
          la solución perfecta para tu negocio.
        </p>
      </div>
    </div>
  );
};

export default VoiceAI;