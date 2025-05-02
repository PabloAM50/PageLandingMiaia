import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

const CalendarPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <CalendarIcon className="w-12 h-12 text-blue-400" />
          <h1 className="text-4xl font-bold">Agenda tu cita manualmente</h1>
        </div>
        <p className="text-xl text-gray-300">
          Selecciona la fecha y hora que mejor te convenga para tu consulta. 
          Aunque este método es más tradicional, te garantizamos la misma calidad 
          de servicio y atención personalizada para discutir cómo la IA puede 
          potenciar tu negocio.
        </p>
      </div>
    </div>
  );
};

export default CalendarPage;