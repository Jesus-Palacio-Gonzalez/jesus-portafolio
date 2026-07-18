// src/pages/PricingSection.tsx
import { Check } from 'lucide-react';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiStripe,
  SiVercel,
  SiFigma,
} from 'react-icons/si';
import FadeIn from '../components/FadeIn';

interface TechIcon {
  name: string;
  icon: React.ElementType;
}

interface PricingPlan {
  name: string;
  image: string; // ruta en /public
  price: string; // en COP, formateado
  period: string;
  description: string;
  benefits: string[];
  technologies: TechIcon[];
  whatsappMessage: string;
}

// TODO: reemplaza con tu número real (código país + número, sin +)
const WHATSAPP_NUMBER = '573001234567';

// TODO: ajusta montos reales en COP
const PLANS: PricingPlan[] = [
  {
    name: 'Landing Page',
    image: './public/assets/landingpage.png',
    price: '$800.000',
    period: 'COP',
    description: 'Página de una sola vista, optimizada para conversión y velocidad.',
    benefits: [
      'Diseño a medida (no plantillas)',
      'Hasta 5 secciones',
      'Animaciones y microinteracciones',
      'Responsive mobile/tablet/desktop',
      'Formulario de contacto integrado',
      '1 ronda de revisiones',
    ],
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'Framer Motion', icon: SiFramer },
      { name: 'Vite', icon: SiVite },
    ],
    whatsappMessage: 'Hola, quiero cotizar el plan de Landing Page 🚀',
  },
  {
    name: 'Web App Full-Stack',
    image: './public/assets/fullstacksystem.png',
    price: '$4.800.000',
    period: 'COP',
    description: 'Aplicación web completa con backend, base de datos y autenticación.',
    benefits: [
      'Frontend + backend a medida',
      'Base de datos y API propia',
      'Autenticación de usuarios',
      'Panel de administración',
      'Despliegue en producción',
      '3 rondas de revisiones',
      '30 días de soporte post-entrega',
    ],
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Vercel', icon: SiVercel },
    ],
    whatsappMessage: 'Hola, quiero cotizar el plan de Web App Full-Stack 💻',
  },
  {
    name: 'E-commerce',
    image: './public/assets/ecommerce.png',
    price: '$3.400.000',
    period: 'COP',
    description: 'Tienda online lista para vender, con pagos y gestión de inventario.',
    benefits: [
      'Catálogo de productos ilimitado',
      'Pasarela de pagos integrada',
      'Carrito y checkout optimizado',
      'Gestión de inventario y pedidos',
      'Panel de administración',
      '30 días de soporte post-entrega',
    ],
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Stripe', icon: SiStripe },
      { name: 'Tailwind', icon: SiTailwindcss },
    ],
    whatsappMessage: 'Hola, quiero cotizar el plan de E-commerce 🛒',
  },
  {
    name: 'Consultoría Freelance',
    image: './public/assets/consultoria.png',
    price: '$140.000',
    period: 'hora',
    description: 'Acompañamiento puntual: revisiones de código, arquitectura o dudas técnicas.',
    benefits: [
      'Sesiones vía videollamada',
      'Revisión y auditoría de código',
      'Asesoría en arquitectura',
      'Resolución de bugs específicos',
      'Sin permanencia, pago por sesión',
    ],
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Figma', icon: SiFigma },
    ],
    whatsappMessage: 'Hola, quiero agendar una consultoría freelance 🧠',
  },
];

const handleWhatsAppClick = (message: string) => {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${+573018926358}?text=${encoded}`, '_blank');
};

export default function PricingSection() {
  return (
    <section
      id="price"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Pricing
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-[#D7E2EA] opacity-60 font-light text-center max-w-xl mx-auto mb-16 sm:mb-20 md:mb-24">
          Elige el plan que mejor se adapte a tu proyecto y lleva tu idea al siguiente nivel con soluciones tecnológicas de calidad.
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PLANS.map((plan, i) => (
          <FadeIn key={plan.name} delay={i * 0.1} className="h-full">
            <div
              className="h-full flex flex-col rounded-[30px] overflow-hidden text-white transition-transform duration-300 hover:-translate-y-1"
              style={{
                background:
                  'linear-gradient(160deg, #18011F 0%, #4A1470 45%, #7621B0 100%)',
              }}
            >
              {/* Imagen */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18011F] via-transparent to-transparent" />
              </div>

              <div className="flex flex-col flex-1 p-6 sm:p-7">
                <h3 className="font-medium uppercase tracking-wide text-lg sm:text-xl mb-2">
                  {plan.name}
                </h3>

                <p className="font-light text-sm leading-relaxed opacity-80 mb-5">
                  {plan.description}
                </p>

                <div className="flex items-end gap-1 mb-5">
                  <span className="font-black" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
                    {plan.price}
                  </span>
                  <span className="font-light uppercase tracking-wide text-xs mb-1.5 opacity-70">
                    / {plan.period}
                  </span>
                </div>

                <p className="font-light uppercase tracking-widest text-xs opacity-60 mb-3">
                  Beneficios
                </p>
                <ul className="flex flex-col gap-2 mb-6">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm font-light">
                      <Check size={16} className="flex-shrink-0 mt-0.5 opacity-90" />
                      <span className="opacity-90">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-light uppercase tracking-widest text-xs opacity-60 mb-3">
                  Tecnologías
                </p>
                <div className="flex flex-wrap gap-3 mb-7">
                  {plan.technologies.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center gap-1.5 w-16"
                        title={tech.name}
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                          <Icon size={18} />
                        </div>
                        <span className="text-[10px] font-light opacity-70 text-center leading-tight">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => handleWhatsAppClick(plan.whatsappMessage)}
                  className="mt-auto w-full rounded-full font-medium uppercase tracking-widest px-6 py-3 text-sm text-white transition-opacity duration-200 hover:opacity-90"
                  style={{
                    background: 'linear-gradient(90deg, #EC4899 0%, #A855F7 50%, #22D3EE 100%)',
                  }}
                >
                  Elegir este plan 🚀
                </button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}