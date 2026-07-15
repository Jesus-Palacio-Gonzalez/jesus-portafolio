import { Check } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const PLANS: PricingPlan[] = [
  {
    name: 'Landing Page',
    price: '$400',
    period: 'proyecto',
    description: 'Página de una sola vista, optimizada para conversión y velocidad.',
    features: [
      'Diseño a medida (no plantillas)',
      'Hasta 5 secciones',
      'Animaciones y microinteracciones',
      'Responsive mobile/tablet/desktop',
      'Formulario de contacto integrado',
      '1 ronda de revisiones',
    ],
    highlighted: true,
  },
  {
    name: 'Web App Full-Stack',
    price: '$1,200',
    period: 'proyecto',
    description: 'Aplicación web completa con backend, base de datos y autenticación.',
    features: [
      'Frontend + backend a medida',
      'Base de datos y API propia',
      'Autenticación de usuarios',
      'Panel de administración',
      'Despliegue en producción',
      '3 rondas de revisiones',
      '30 días de soporte post-entrega',
    ],
    highlighted: true,
  },
  {
    name: 'E-commerce',
    price: '$1,600',
    period: 'proyecto',
    description: 'Tienda online lista para vender, con pagos y gestión de inventario.',
    features: [
      'Catálogo de productos ilimitado',
      'Pasarela de pagos integrada',
      'Carrito y checkout optimizado',
      'Gestión de inventario y pedidos',
      'Panel de administración',
      '30 días de soporte post-entrega',
    ],
    highlighted: true,
  },
  {
    name: 'Consultoría Freelance',
    price: '$35',
    period: 'hora',
    description: 'Acompañamiento puntual: revisiones de código, arquitectura o dudas técnicas.',
    features: [
      'Sesiones vía videollamada',
      'Revisión y auditoría de código',
      'Asesoría en arquitectura',
      'Resolución de bugs específicos',
      'Sin permanencia, pago por sesión',
    ],
    highlighted: true,
  },
];

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
              className={`h-full flex flex-col rounded-[30px] p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? 'text-white'
                  : 'bg-[#141414] text-[#D7E2EA] border border-[#D7E2EA]/15'
              }`}
              style={
                plan.highlighted
                  ? {
                      background:
                        'linear-gradient(160deg, #18011F 0%, #4A1470 45%, #7621B0 100%)',
                    }
                  : undefined
              }
            >
              <h3 className="font-medium uppercase tracking-wide text-lg sm:text-xl mb-2">
                {plan.name}
              </h3>

              <p
                className={`font-light text-sm leading-relaxed mb-6 ${
                  plan.highlighted ? 'opacity-80' : 'opacity-60'
                }`}
              >
                {plan.description}
              </p>

              <div className="flex items-end gap-1 mb-8">
                <span className="font-black" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
                  {plan.price}
                </span>
                <span
                  className={`font-light uppercase tracking-wide text-sm mb-1.5 ${
                    plan.highlighted ? 'opacity-70' : 'opacity-50'
                  }`}
                >
                  / {plan.period}
                </span>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm font-light">
                    <Check
                      size={16}
                      className={`flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'opacity-90' : 'opacity-70'
                      }`}
                    />
                    <span className={plan.highlighted ? 'opacity-90' : 'opacity-80'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.highlighted ? (
                <ContactButton className="w-full" />
              ) : (
                <button className="w-full rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 text-sm transition-colors duration-200 hover:bg-[#D7E2EA]/10">
                  elegir este plan
                </button>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}