import React from 'react';
import { X, Send, Bot } from 'lucide-react';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed bottom-4 right-4 w-96 bg-gray-900 rounded-2xl shadow-xl border border-gray-700 transition-all duration-300 transform ${
        isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gradient-to-r from-blue-900 to-purple-900 rounded-t-2xl">
        <div className="flex items-center space-x-2">
          <Bot className="w-6 h-6 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Asistente miaIA.AI</h3>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        <div className="flex items-start space-x-2">
          <div className="bg-blue-500/10 p-2 rounded-full">
            <Bot className="w-5 h-5 text-blue-400" />
          </div>
          <div className="bg-gray-800 rounded-lg p-3 max-w-[80%]">
            <p className="text-white">¡Hola! Soy el asistente virtual de miaIA.AI. ¿Cómo puedo ayudarte a transformar tu negocio con IA?</p>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Escribe tu mensaje..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2 transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;