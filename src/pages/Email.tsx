import { useState } from 'react';
import { Mail, ArrowLeft, Check, Loader2, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Email = () => {
  const [formData, setFormData] = useState({
    email: '',
    telefono: '',
    descripcion: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('loading');
    setErrorMessage('');
    
    try {
      let success = false;
      
      // Intenta con la configuración normal primero
      try {
        const response = await fetch('https://n8n.miaia.ai/webhook/formFromMAIA', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          // Modo que permite hacer solicitudes CORS sin credenciales
          mode: 'cors',
          body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
          throw new Error('Error al enviar el formulario');
        }
        
        // Si llega aquí, la respuesta fue exitosa
        success = true;
      } catch (corsError) {
        console.warn('Intentando alternativa por error CORS:', corsError);
        
        // Plan B: usar el endpoint que sabemos que funciona
        try {
          const fallbackResponse = await fetch('https://n8n.miaia.ai/webhook/CallFromMIAIA', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              // Para mantener la compatibilidad con el webhook de VoiceAI
              nombre: formData.email, // Usamos el email como nombre para que haya algo
              email: formData.email,
              telefono: formData.telefono || 'No proporcionado',
              descripcion: `[Formulario de Contacto Web] ${formData.descripcion || 'Sin descripción'}`
            })
          });
          
          if (!fallbackResponse.ok) {
            throw new Error('Error al enviar el formulario');
          }
          
          success = true;
        } catch (fallbackError) {
          console.error('Error en el fallback:', fallbackError);
          throw fallbackError; // Propagar el error para que se maneje en el bloque catch exterior
        }
      }
      
      if (success) {
        // Resetear el formulario después del éxito
        setFormData({
          email: '',
          telefono: '',
          descripcion: ''
        });
        setSubmitStatus('success');
      }
    } catch (error) {
      console.error('Error en el formulario:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Ocurrió un error al enviar los datos');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      {/* Botón para volver al inicio */}
      <div className="max-w-2xl mx-auto mb-4 flex items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors bg-gray-800/70 rounded-lg px-3 py-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al inicio</span>
        </Link>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4 mb-6">
          <Mail className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />
          <h1 className="text-3xl md:text-4xl font-bold">Contáctanos</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
          
          <p className="text-md md:text-lg text-gray-300 mb-6">
            Cuéntanos sobre tu proyecto para que podamos ayudarte a automatizarlo con IA.
            Te responderemos a la brevedad con una propuesta personalizada para tu caso.
          </p>
          
          {submitStatus === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-900/30 border border-green-500 rounded-lg p-6 text-center">
              <Check className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">¡Formulario enviado con éxito!</h3>
              <p className="text-gray-300 mb-4">
                Gracias por tu interés. Revisaremos tu proyecto y te contactaremos pronto.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Enviar otro mensaje
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Correo electrónico <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="tu@correo.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+34 XXX XXX XXX"
                />
              </div>
              
              <div>
                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-300 mb-1">
                  ¿En qué podemos ayudarte?
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                />
              </div>
              
              {submitStatus === 'error' && (
                <div className="bg-red-900/30 border border-red-500 rounded-lg p-4 text-sm text-red-200">
                  <p>Error: {errorMessage || 'No se pudo enviar el formulario. Inténtalo de nuevo.'}</p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-2 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                  isSubmitting ? 'bg-blue-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar mensaje</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Email;