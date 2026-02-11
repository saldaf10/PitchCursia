"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slide from "./Slide";
import ProgressBar from "./ProgressBar";
import {
  ChevronLeft, ChevronRight, Check, X,
  Brain, Globe, Clock, ShieldCheck, Activity, Users,
  Zap, Award
} from "lucide-react";

// Updated content based on user feedback
const slides = [
  {
    id: "cover",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Logo updated: "inter pero no tan bold" */}
          <h1 className="text-9xl font-semibold tracking-tighter text-black">
            curs<span className="text-cursia-blue">ia</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl font-light text-gray-500 tracking-widest uppercase mb-12"
        >
          Entrenamiento inteligente. Impacto medible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 text-gray-400 font-medium"
        >
          <div className="px-4 py-2 bg-gray-50 rounded-full border border-gray-100 flex items-center gap-2">
            <Globe className="w-4 h-4 text-cursia-blue" /> Red Global de Expertos
          </div>
          <div className="px-4 py-2 bg-gray-50 rounded-full border border-gray-100 flex items-center gap-2">
            <Zap className="w-4 h-4 text-cursia-blue" /> Implementación Rápida
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Nuestros 3 Pilares",
    content: (
      <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold text-gray-900 tracking-tight mb-16 text-center">Estrategia de Transformación</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-4 text-center items-center">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-cursia-blue mb-4">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Personalización</h3>
            <p className="text-gray-500 text-lg leading-relaxed">Contenido hecho a la medida de tu realidad operativa y cultura organizacional.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-4 text-center items-center">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-cursia-blue mb-4">
              <Brain className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Inteligencia Artificial</h3>
            <p className="text-gray-500 text-lg leading-relaxed">Tutoría 24/7 y generación de rutas de aprendizaje en tiempos récord.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-4 text-center items-center">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-cursia-blue mb-4">
              <Activity className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Seguimiento</h3>
            <p className="text-gray-500 text-lg leading-relaxed">Medición real del impacto y verificación de comprensión profunda.</p>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    title: "1. Personalización",
    bullets: [
      { text: "Cursos desde Manuales: Transformamos tus documentos técnicos y manuales operativos en experiencias de aprendizaje.", icon: Check, color: "text-cursia-blue" },
      { text: "Casos Reales: Situaciones de TU empresa, no ejemplos genéricos de internet.", icon: Check, color: "text-cursia-blue" },
      { text: "Identidad Corporativa: Alineación total con el lenguaje y valores de tu marca.", icon: Check, color: "text-cursia-blue" },
      { text: "Nicho Específico: Expertos que entienden los desafíos técnicos de tu industria.", icon: Check, color: "text-cursia-blue" },
    ],
  },
  {
    title: "2. Inteligencia Artificial",
    bullets: [
      { text: "Más que Quizzes: Superamos las preguntas de opción múltiple con evaluaciones de respuesta abierta.", icon: Zap, color: "text-cursia-blue" },
      { text: "Tutor 24/7: Un coach inteligente que resuelve dudas técnicas al instante.", icon: Zap, color: "text-cursia-blue" },
      { text: "Generación Ágil: Estructuración de cursos complejos en días, no meses.", icon: Zap, color: "text-cursia-blue" },
      { text: "Detección de IA en respuestas: Verificamos la autoría y el pensamiento crítico de los colaboradores.", icon: ShieldCheck, color: "text-cursia-blue" },
    ],
  },
  {
    title: "3. Seguimiento",
    bullets: [
      { text: "Dashboard de Manager: Seguimiento personalizado para tener el control total del progreso.", icon: Users, color: "text-cursia-blue" },
      { text: "Actualización en Vivo: Monitoreo en tiempo real del desempeño de cada empleado.", icon: Activity, color: "text-cursia-blue" },
      { text: "Retroalimentación Absoluta: Feedback detallado y profundo en cada evaluación final.", icon: Check, color: "text-cursia-blue" },
    ],
  },
  {
    id: "plans",
    title: "Modelos de Implementación",
    content: (
      <div className="w-full h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-gray-900 tracking-tight mb-12 text-center">Modelos de Implementación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full px-4">
          {/* Plan 1 */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="p-8 border border-gray-200 rounded-3xl shadow-xl bg-white flex flex-col h-full"
          >
            <div className="mb-6 h-32 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900">Nivel 01</h3>
              <p className="text-lg text-cursia-blue font-semibold">Proyecto Puntual</p>
              <p className="text-lg text-gray-600 mt-2">1 Curso</p>
            </div>

            <div className="space-y-6 flex-grow flex flex-col justify-between">
              <div className="text-center py-8 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-lg text-gray-400 font-medium uppercase tracking-wide mb-2">Inversión Total</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-black text-gray-900">600</span>
                  <span className="text-lg text-gray-500 font-medium">USD</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-5 bg-blue-50 rounded-xl border border-blue-100">
                <span className="text-gray-900 font-medium text-lg">Licencias Incluidas</span>
                <div className="flex flex-col items-end">
                  <span className="text-cursia-blue font-bold text-2xl">Hasta 50</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 py-3 rounded-xl bg-gray-100 text-gray-900 font-bold hover:bg-gray-200 transition-colors">
              Cotizar Proyecto
            </button>
          </motion.div>

          {/* Plan 2 */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="p-8 border-2 border-cursia-blue rounded-3xl shadow-2xl bg-white relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 bg-cursia-blue text-white text-xs px-4 py-2 rounded-bl-2xl font-bold tracking-widest uppercase shadow-sm">Recomendado</div>
            <div className="mb-6 h-32 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900">Nivel 02</h3>
              <p className="text-lg text-cursia-blue font-semibold">Desarrollo Equipo</p>
              <p className="text-lg text-gray-600 mt-2">3 Cursos</p>
            </div>

            <div className="space-y-6 flex-grow flex flex-col justify-between">
              <div className="text-center py-6 bg-blue-50/30 rounded-2xl border border-blue-100">
                <p className="text-lg text-gray-400 font-medium uppercase tracking-wide mb-2">Inversión Total</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-black text-cursia-blue">1,500</span>
                  <span className="text-lg text-gray-500 font-medium">USD</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-5 bg-blue-50 rounded-xl border border-blue-100">
                <span className="text-gray-900 font-medium text-lg">Licencias Incluidas</span>
                <div className="flex flex-col items-end">
                  <span className="text-cursia-blue font-bold text-2xl">Hasta 150</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 py-3 rounded-xl bg-cursia-blue text-white font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200">
              Iniciar Alianza
            </button>
          </motion.div>

          {/* Plan 3 */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="p-8 border border-gray-200 rounded-3xl shadow-xl bg-white flex flex-col h-full"
          >
            <div className="mb-6 h-32 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900">Nivel 03</h3>
              <p className="text-lg text-cursia-blue font-semibold">Plan de Escala</p>
              <p className="text-lg text-gray-600 mt-2">7 Cursos</p>
            </div>

            <div className="space-y-6 flex-grow flex flex-col justify-between">
              <div className="text-center py-6 bg-blue-50/30 rounded-2xl border border-blue-100">
                <p className="text-lg text-gray-400 font-medium uppercase tracking-wide mb-2">Inversión Total</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-black text-cursia-blue">2,800</span>
                  <span className="text-lg text-gray-500 font-medium">USD</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-5 bg-blue-50 rounded-xl border border-blue-100">
                <span className="text-gray-900 font-medium text-lg text-sm">Licencias Incluidas</span>
                <div className="flex flex-col items-end">
                  <span className="text-cursia-blue font-bold text-lg text-right">ILIMITADAS (Full Access)</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 py-3 rounded-xl bg-gray-100 text-gray-900 font-bold hover:bg-gray-200 transition-colors">
              Iniciar Plan Escala
            </button>
          </motion.div>

        </div>
      </div>
    )
  },
  {
    id: "closing",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-12 relative">
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-50" />

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-8xl font-bold text-gray-900 tracking-tight"
        >
          Gracias
        </motion.h2>
        <p className="text-3xl text-gray-500 max-w-4xl leading-relaxed">
          "Transformamos el conocimiento de su equipo en <span className="text-gray-900 font-semibold underline decoration-cursia-blue decoration-4 underline-offset-4">resultados reales</span>."
        </p>
        <div className="flex gap-4 pt-8">
          <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform">
            Agendar Reunión
          </button>
          <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-bold text-lg hover:border-gray-900 transition-colors">
            Ver Demo
          </button>
        </div>
        <div className="pt-12 text-xl text-gray-400 font-mono">
          contacto@cursia.enterprise
        </div>
      </div>
    )
  }
];

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const slideData = slides[currentSlide];

  return (
    <div className="relative w-screen h-screen bg-white text-black overflow-hidden selection:bg-cursia-blue/20 flex flex-col">
      {/* Subtle background noise texture could go here if requested, staying clean for now but added subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white via-white to-blue-50/30 pointer-events-none z-0" />

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <Slide key={currentSlide} direction={direction} className="z-10">
          {slideData.content ? (
            slideData.content
          ) : (
            <div className="flex flex-col h-full justify-center max-w-6xl mx-auto w-full px-8">
              <motion.h2
                className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight mb-20 border-l-8 border-cursia-blue pl-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {slideData.title}
              </motion.h2>
              <div className="space-y-8 pl-8">
                {slideData.bullets?.map((bullet, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1), duration: 0.5 }}
                    className="flex items-start gap-8 group"
                    whileHover={{ x: 10 }}
                  >
                    {typeof bullet !== 'string' && bullet.icon ? (
                      <div className={`p-3 rounded-2xl bg-gray-50 group-hover:bg-white group-hover:shadow-lg transition-all border border-transparent group-hover:border-gray-100`}>
                        <bullet.icon className={`w-8 h-8 ${bullet.color}`} strokeWidth={2.5} />
                      </div>
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-cursia-blue mt-5 flex-shrink-0 shadow-sm shadow-blue-200" />
                    )}
                    <p className="text-3xl md:text-4xl text-gray-600 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                      {typeof bullet === 'string' ? bullet : bullet.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </Slide>
      </AnimatePresence>

      {/* Navigation Controls (Visible on hover or touch) */}
      <div className="absolute inset-y-0 left-0 w-24 flex items-center justify-start pl-4 opacity-0 hover:opacity-100 transition-opacity z-20">
        <button onClick={prevSlide} className="p-4 rounded-full hover:bg-white hover:shadow-xl transition-all disabled:opacity-0" disabled={currentSlide === 0}>
          <ChevronLeft className="w-8 h-8 text-gray-400" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 w-24 flex items-center justify-end pr-4 opacity-0 hover:opacity-100 transition-opacity z-20">
        <button onClick={nextSlide} className="p-4 rounded-full hover:bg-white hover:shadow-xl transition-all disabled:opacity-0" disabled={currentSlide === slides.length - 1}>
          <ChevronRight className="w-8 h-8 text-gray-400" />
        </button>
      </div>

      <ProgressBar current={currentSlide} total={slides.length} />

      {/* Page indicator */}
      <div className="absolute bottom-6 right-8 text-gray-300 font-mono text-sm z-50">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}
