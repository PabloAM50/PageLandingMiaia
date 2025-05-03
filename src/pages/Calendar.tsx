import { useEffect, useState } from 'react';
import { Calendar as CalendarIcon, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Cal, { getCalApi } from "@calcom/embed-react";
import { Link } from 'react-router-dom';

const CalendarPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Configurar el componente de Cal.com
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {
        "hideEventTypeDetails": false,
        "layout": "month_view",
        "styles": {
          "branding": {
            "brandColor": "#3B82F6" // Color azul que coincide con el tema
          }
        }
      });

      // Simular tiempo de carga mínimo para mostrar el spinner
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      
      return () => clearTimeout(timer);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      {/* Botón para volver al inicio */}
      <div className="max-w-6xl mx-auto mb-4 flex items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors bg-gray-800/70 rounded-lg px-3 py-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al inicio</span>
        </Link>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4 mb-6">
          <CalendarIcon className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />
          <h1 className="text-3xl md:text-4xl font-bold">Agenda tu cita</h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-8">
          Selecciona la fecha y hora que mejor te convenga para tu consulta. 
          Te garantizamos una atención personalizada para discutir cómo la IA puede 
          potenciar tu negocio.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full h-[700px] md:h-[800px] relative rounded-xl overflow-visible bg-gray-800 shadow-2xl">
          
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-blue-400">Cargando calendario...</p>
              </div>
            </div>
          )}

          <div className="w-full h-full">
            <Cal 
              namespace="30min"
              calLink="miaia/30min"
              style={{
                width: "100%",
                height: "100%",
                overflow: "visible",
                borderRadius: "0.75rem",
              }}
              config={{
                layout: "month_view",
                theme: "dark",
                hideEventTypeDetails: "false",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CalendarPage;