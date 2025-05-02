import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bot, MessageSquare, Calendar, Mail, X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  // Debug log para verificar si el modal recibe correctamente el estado isOpen
  console.log('BookingModal - estado isOpen:', isOpen);

  const options = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Habla con nuestra secretaria IA",
      path: "/hablar-ia",
      description: "Conversación por voz con nuestra IA"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chatea con nuestra secretaria IA",
      path: "/chat-ia",
      description: "Mensajería instantánea con IA"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Agendar manualmente",
      path: "/calendario",
      description: "Selecciona fecha y hora tú mismo"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Enviar correo",
      path: "/correo",
      description: "Procesado por nuestra IA"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full border border-gray-700 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex justify-center mb-4"
              >
                <Bot className="w-16 h-16 text-blue-400" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-2">¿Cómo prefieres agendar tu cita?</h2>
              <p className="text-gray-400">Selecciona el método que mejor se adapte a ti</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {options.map((option, index) => (
                <motion.button
                  key={option.path}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl text-left transition-colors border border-gray-700 hover:border-blue-500/50"
                  onClick={() => {
                    onClose();
                    navigate(option.path);
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500/10 p-3 rounded-lg text-blue-400">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{option.title}</h3>
                      <p className="text-sm text-gray-400">{option.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;