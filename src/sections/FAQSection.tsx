import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FadeIn from '../components/FadeIn';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: '¿Cuánto tiempo toma un proyecto?',
    answer:
      'Depende del alcance: una Landing Page suele tomar entre 1 y 2 semanas, una Web App Full-Stack entre 3 y 6 semanas, y un E-commerce entre 4 y 8 semanas. Al inicio del proyecto te doy un cronograma claro con fechas de entrega.',
  },
  {
    question: '¿Qué incluye el precio de cada plan?',
    answer:
      'Cada plan incluye diseño, desarrollo, pruebas y despliegue en producción. El número de rondas de revisiones varía según el plan. Cualquier funcionalidad adicional fuera del alcance inicial se cotiza aparte, siempre con tu aprobación antes de empezar.',
  },
  {
    question: '¿Ofreces soporte después de la entrega?',
    answer:
      'Sí. Los planes de Web App Full-Stack y E-commerce incluyen 30 días de soporte post-entrega para corregir bugs. Después de ese período, puedes contratar soporte adicional por horas a través del plan de consultoría freelance.',
  },
  {
    question: '¿Cómo es el proceso de trabajo?',
    answer:
      'Empezamos con una llamada para entender tu idea y definir el alcance. Luego te comparto una propuesta con precio y tiempos. Una vez aprobada, trabajo en sprints con entregas parciales para que veas el avance y puedas dar feedback en el camino.',
  },
  {
    question: '¿Puedo pagar en cuotas?',
    answer:
      'Sí, normalmente divido el pago en dos partes: un anticipo del 50% para iniciar el proyecto y el 50% restante contra la entrega final. Para proyectos más grandes podemos acordar un esquema de pagos por hitos.',
  },
  {
    question: '¿Trabajas con clientes fuera de Colombia?',
    answer:
      'Sí, trabajo de forma remota con clientes de cualquier país. La comunicación es por videollamada y WhatsApp, y los pagos se pueden hacer por transferencia internacional o plataformas como PayPal.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          FAQs
        </h2>
      </FadeIn>

      <div className="max-w-3xl mx-auto flex flex-col">
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <FadeIn key={faq.question} delay={i * 0.08}>
              <div
                style={{ borderBottom: '1px solid rgba(215, 226, 234, 0.15)' }}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-6 sm:py-7 text-left"
                >
                  <span
                    className="text-[#D7E2EA] font-medium"
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
                  >
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex-shrink-0 text-[#D7E2EA]"
                  >
                    <ChevronDown size={22} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="text-[#D7E2EA] font-light leading-relaxed opacity-70 pb-6 sm:pb-7 max-w-2xl"
                        style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}