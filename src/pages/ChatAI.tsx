import { useEffect } from 'react';
import { MessageSquare, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const CHAT_WEBHOOK = 'https://n8n.miaia.ai/webhook/2e46724a-b84b-450b-87ca-664ad7f24f7e/chat';

const ChatAI = () => {
  useEffect(() => {
    // Personaliza los colores del chat para que encajen con la web
    const style = document.createElement('style');
    
    style.innerHTML = `
      :root {
        --chat--color-primary: #3B82F6;
        --chat--color-primary-shade-50: #2563eb;
        --chat--color-primary-shade-100: #1d4ed8;
        --chat--color-secondary: #0ea5e9;
        --chat--color-dark: #111827;
        --chat--color-light:rgb(10, 20, 42);
        --chat--background: #181f2a; /* Fondo principal del chat */
        --chat--window--width: 420px;
        --chat--window--height: 600px;
        --chat--border-radius: 1rem;
        --chat--header--background: linear-gradient(90deg, #1e3a8a 0%, #6d28d9 100%);
        --chat--header--color: #fff;
        --chat--header--border-bottom: 1px solid #374151;
        --chat--message--font-size: 1rem;
        --chat--message--bot--background: #23272f;
        --chat--message--bot--color: #ffff;
        --chat--message--user--background:#6729D3;
        --chat--message--user--color: #ffff;
        --chat--message--border-radius: 1rem;
        --chat--input--background:rgb(132, 132, 132);
        --chat--input--color:rgb(68, 68, 68);
        --chat--input--border-radius: 0.75rem;
        --chat--input--placeholder-color:rgb(251, 255, 0);        
        --chat--toggle--background:rgb(40, 40, 40);
        --chat--toggle--color: rgb(59, 59, 59);
        --chat--toggle--size: 42px;
        --chat--textarea--height: 42px;
        --chat--textarea--color:rgb(59, 59, 59);
      }
    `;


    document.head.appendChild(style);

    createChat({
      webhookUrl: CHAT_WEBHOOK,
      mode: 'fullscreen',
      showWelcomeScreen: false,
      target: '#n8n-chat',
      i18n: {
        en: {
          title: '',
          subtitle: 'Chatea con nuestro agente IA para resolver tus dudas',
          getStarted: 'Nueva conversación',
          inputPlaceholder: 'Escribe tu mensaje...',
          footer: '',
          closeButtonTooltip: 'Cerrar chat',
        }
      },
      initialMessages: [
        'Hola soy el agente IA de MIAIA. ¿En qué puedo ayudarte hoy?'
      ]
    });

    return () => {
      document.head.removeChild(style);
      // Limpieza opcional si el widget de n8n soporta destrucción
    };
  }, []);

  return (
    
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      {/* Header con botón para volver */}
      <div className="max-w-2xl mx-auto mb-4 flex items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors bg-gray-800/70 rounded-lg px-3 py-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al inicio</span>
        </Link>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <MessageSquare className="w-12 h-12 text-blue-400" />
          <h1 className="text-4xl font-bold">Chat con nuestro agente IA</h1>
        </div>
        <p className="text-xl text-gray-300 mb-6">
          En esta sección podrás chatear con nuestro agente IA para explorar nuestros servicios y productos. 
          Obtén respuestas instantáneas a todas tus preguntas y descubre cómo podemos ayudarte a transformar 
          tu negocio con soluciones de IA personalizadas.
        </p>
        {/* Contenedor donde se monta el chat */}
        <div id="n8n-chat" className="my-8 w-full h-[600px] md:h-[700px] rounded-2xl overflow-hidden bg-gray-900 shadow-xl border border-gray-700" />
      </div>
    </div>
  );
};

export default ChatAI;