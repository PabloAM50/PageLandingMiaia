import { useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
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
        --chat--color-light: #f3f4f6;
        --chat--window--width: 420px;
        --chat--window--height: 600px;
        --chat--border-radius: 1rem;
        --chat--header--background: #1e293b;
        --chat--header--color: #fff;
        --chat--message--font-size: 1rem;
      }
    `;
    document.head.appendChild(style);

    createChat({
      webhookUrl: CHAT_WEBHOOK,
      mode: 'window',
      showWelcomeScreen: false,
      target: '#n8n-chat',
      i18n: {
        en: {
          title: '¡Hola! 👋',
          subtitle: 'Chatea con nuestro agente IA para resolver tus dudas',
          getStarted: 'Nueva conversación',
          inputPlaceholder: 'Escribe tu mensaje...',
          footer: '',
          closeButtonTooltip: 'Cerrar chat',
        }
      },
      initialMessages: [
        '¡Hola! 👋',
        'Soy el agente IA de MIAIA. ¿En qué puedo ayudarte hoy?'
      ]
    });

    return () => {
      document.head.removeChild(style);
      // Limpieza opcional si el widget de n8n soporta destrucción
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <MessageSquare className="w-12 h-12 text-blue-400" />
          <h1 className="text-4xl font-bold">Chat con nuestra secretaria IA</h1>
        </div>
        <p className="text-xl text-gray-300 mb-6">
          En esta sección podrás chatear con nuestra secretaria IA para explorar nuestros servicios y productos. 
          Obtén respuestas instantáneas a todas tus preguntas y descubre cómo podemos ayudarte a transformar 
          tu negocio con soluciones de IA personalizadas.
        </p>
        {/* Contenedor donde se monta el chat */}
        <div id="n8n-chat" className="my-8" />
      </div>
    </div>
  );
};

export default ChatAI;