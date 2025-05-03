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
	--chat--color-primary: #e74266;
	--chat--color-primary-shade-50: #db4061;
	--chat--color-primary-shade-100: #cf3c5c;
	--chat--color-secondary: #20b69e;
	--chat--color-secondary-shade-50: #1ca08a;
	--chat--color-white: #ffffff;
	--chat--color-light: #f2f4f8;
	--chat--color-light-shade-50: #e6e9f1;
	--chat--color-light-shade-100: #c2c5cc;
	--chat--color-medium: #d2d4d9;
	--chat--color-dark: #101330;
	--chat--color-disabled: #777980;
	--chat--color-typing: #404040;

	--chat--spacing: 1rem;
	--chat--border-radius: 0.25rem;
	--chat--transition-duration: 0.15s;

	--chat--window--width: 400px;
	--chat--window--height: 600px;

	--chat--header-height: auto;
	--chat--header--padding: var(--chat--spacing);
	--chat--header--background: var(--chat--color-dark);
	--chat--header--color: var(--chat--color-light);
	--chat--header--border-top: none;
	--chat--header--border-bottom: none;
	--chat--header--border-bottom: none;
	--chat--header--border-bottom: none;
	--chat--heading--font-size: 2em;
	--chat--header--color: var(--chat--color-light);
	--chat--subtitle--font-size: inherit;
	--chat--subtitle--line-height: 1.8;

	--chat--textarea--height: 50px;

	--chat--message--font-size: 1rem;
	--chat--message--padding: var(--chat--spacing);
	--chat--message--border-radius: var(--chat--border-radius);
	--chat--message-line-height: 1.8;
	--chat--message--bot--background: var(--chat--color-white);
	--chat--message--bot--color: var(--chat--color-dark);
	--chat--message--bot--border: none;
	--chat--message--user--background: var(--chat--color-secondary);
	--chat--message--user--color: var(--chat--color-white);
	--chat--message--user--border: none;
	--chat--message--pre--background: rgba(0, 0, 0, 0.05);

	--chat--toggle--background: var(--chat--color-primary);
	--chat--toggle--hover--background: var(--chat--color-primary-shade-50);
	--chat--toggle--active--background: var(--chat--color-primary-shade-100);
	--chat--toggle--color: var(--chat--color-white);
	--chat--toggle--size: 64px;
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