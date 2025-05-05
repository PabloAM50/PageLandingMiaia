import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Brain, Clock, DollarSign, Sparkles, Bot, ChevronRight, Calendar, Database, LineChart, Briefcase } from 'lucide-react';
import Chatbot from './components/Chatbot';
import BookingModal from './components/BookingModal';
import { ControlPanelSection, RestaurantPanelSection } from './AppPanels';
import VoiceAI from './pages/VoiceAI';
import ChatAI from './pages/ChatAI';
import CalendarPage from './pages/Calendar';
import Email from './pages/Email';

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/hablar-ia" element={<VoiceAI />} />
        <Route path="/chat-ia" element={<ChatAI />} />
        <Route path="/calendario" element={<CalendarPage />} />
        <Route path="/correo" element={<Email />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-teal-900/30 pointer-events-none" />
              <div className="container mx-auto px-4 py-24 relative z-1">
                <div className="flex flex-col items-center text-center space-y-8">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-12 h-12 text-blue-400" />
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                      miaIA.AI
                    </h1>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
                    Transformamos tu empresa con el poder de la{' '}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Inteligencia Artificial
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl">
                    Automatiza procesos, reduce costos y maximiza la eficiencia de tu negocio con soluciones de IA personalizadas
                  </p>
                  <button 
                    onClick={() => {
                      console.log('Botón Comienza Ahora clickeado');
                      setIsBookingModalOpen(true);
                    }}
                    className="bg-gradient-to-r from-blue-500 to-teal-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2 cursor-pointer hover:scale-105 relative z-10"
                    style={{ position: 'relative', zIndex: 50 }}
                  >
                    <span>Comienza Ahora</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="container mx-auto px-4 py-24">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="bg-blue-500/10 p-3 rounded-lg w-fit mb-4">
                    <Clock className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Ahorra Tiempo</h3>
                  <p className="text-gray-400">
                    Automatiza tareas repetitivas y libera el potencial de tu equipo para enfocarse en lo que realmente importa.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="bg-purple-500/10 p-3 rounded-lg w-fit mb-4">
                    <Sparkles className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Optimiza Recursos</h3>
                  <p className="text-gray-400">
                    Maximiza la eficiencia de tus operaciones con soluciones inteligentes que optimizan el uso de recursos.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 group">
                  <div className="bg-teal-500/10 p-3 rounded-lg w-fit mb-4">
                    <DollarSign className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Reduce Costos</h3>
                  <p className="text-gray-400">
                    Minimiza gastos operativos y aumenta tu rentabilidad con procesos automatizados e inteligentes.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="container mx-auto px-4 py-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
                <p className="text-xl text-gray-400">Soluciones avanzadas de IA para cada necesidad</p>
              </div>
              
              {/* Booking Agents */}
              <div className="mb-24">
                <h3 className="text-2xl font-bold mb-8 text-center">Agentes IA para Reservas</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-pink-500/50 transition-all duration-300">
                    <Calendar className="w-8 h-8 text-pink-400 mb-4" />
                    <h4 className="text-xl font-bold mb-2">Peluquerías</h4>
                    <p className="text-gray-400">Gestión automática de citas y recordatorios para salones de belleza</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                    <Calendar className="w-8 h-8 text-yellow-400 mb-4" />
                    <h4 className="text-xl font-bold mb-2">Restaurantes</h4>
                    <p className="text-gray-400">Sistema inteligente de reservas y gestión de mesas</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                    <Calendar className="w-8 h-8 text-green-400 mb-4" />
                    <h4 className="text-xl font-bold mb-2">Clínicas Dentales</h4>
                    <p className="text-gray-400">Programación automatizada de citas y seguimiento de pacientes</p>
                  </div>
                </div>
              </div>

              {/* Advanced Services */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">Servicios Avanzados de IA</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                    <Database className="w-8 h-8 text-blue-400 mb-4" />
                    <h4 className="text-xl font-bold mb-2">Machine Learning con RAG</h4>
                    <p className="text-gray-400">Sistemas de IA avanzados con Retrieval Augmented Generation para procesamiento de datos contextual</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                    <LineChart className="w-8 h-8 text-purple-400 mb-4" />
                    <h4 className="text-xl font-bold mb-2">Big Data Analytics</h4>
                    <p className="text-gray-400">Análisis avanzado de datos masivos para insights empresariales</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-teal-500/50 transition-all duration-300">
                    <Briefcase className="w-8 h-8 text-teal-400 mb-4" />
                    <h4 className="text-xl font-bold mb-2">Consultoría de IA</h4>
                    <p className="text-gray-400">Asesoramiento experto para la implementación de soluciones de IA en tu empresa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paneles de Dashboard */}
            <ControlPanelSection />
            <RestaurantPanelSection />

            {/* Chatbot Component */}
            <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
            
            {/* Booking Modal */}
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;