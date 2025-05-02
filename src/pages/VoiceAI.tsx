import React, { useState } from 'react';
import { Bot, Check, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VoiceAI = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
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
    
    try {
      const response = await fetch('https://n8n.miaia.ai/webhook/CallFromMIAIA', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }
      
      setSubmitStatus('success');
      setTimeout(() => {
        navigate('/');
      }, 3000);
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
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
        <div className="flex items-center space-x-4 mb-6">
          <Bot className="w-8 h-8 text-blue-400" />
          <h1 className="text-2xl md:text-3xl font-bold">Habla con nuestro Agente IA</h1>
        </div>
        
        <p className="text-md md:text-lg text-gray-300 mb-6">
          Completa el formulario y nuestro agente IA te contactará por teléfono para responderte cualquier duda sobre nuestros servicios.
        </p>
        
        {submitStatus === 'success' ? (
          <div className="bg-green-900/30 border border-green-500 rounded-lg p-6 text-center">
            <Check className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">¡Formulario enviado con éxito!</h3>
            <p className="text-gray-300">
              Gracias por tu interés. Te contactaremos por teléfono a la brevedad.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Escribe tu nombre completo"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="tu@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-1">
                Número de teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="+34 XXX XXX XXX"
                required
              />
            </div>
            
            <div>
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-300 mb-1">
                ¿Qué te gustaría saber de nosotros?
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Cuéntanos en qué podemos ayudarte..."
                required
              />
            </div>
            
            {submitStatus === 'error' && (
              <div className="bg-red-900/30 border border-red-500 rounded-lg p-3 text-red-300 text-sm">
                <p>Error: {errorMessage}</p>
                <p>Por favor, intenta nuevamente o contáctanos directamente.</p>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium rounded-lg hover:shadow-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <span>Enviar información</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default VoiceAI;