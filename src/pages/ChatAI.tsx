import React from 'react';
import { MessageSquare } from 'lucide-react';

const ChatAI = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <MessageSquare className="w-12 h-12 text-blue-400" />
          <h1 className="text-4xl font-bold">Chat con nuestra secretaria IA</h1>
        </div>
        <p className="text-xl text-gray-300">
          En esta sección podrás chatear con nuestra secretaria IA para explorar nuestros servicios y productos. 
          Obtén respuestas instantáneas a todas tus preguntas y descubre cómo podemos ayudarte a transformar 
          tu negocio con soluciones de IA personalizadas.
        </p>
      </div>
    </div>
  );
};

export default ChatAI;