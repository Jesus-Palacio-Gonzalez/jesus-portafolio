import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const SECTIONS = [
  {
    title: '1. Información que recopilamos',
    body: 'Este sitio no requiere que crees una cuenta ni que ingreses información personal para navegarlo. Los únicos datos que se recopilan son: (a) datos de uso anónimos a través de Google Analytics (páginas visitadas, tiempo en el sitio, ubicación aproximada y tipo de dispositivo), y (b) la información que decidas compartir voluntariamente al escribirnos por WhatsApp o correo electrónico.',
  },
  {
    title: '2. Uso de cookies',
    body: 'Usamos cookies únicamente con fines de analítica web (Google Analytics), y solo se activan si aceptas el banner de cookies que aparece al ingresar al sitio. Puedes rechazarlas en cualquier momento, y el sitio seguirá funcionando con normalidad. No usamos cookies de publicidad ni de seguimiento entre sitios.',
  },
  {
    title: '3. Cómo usamos tu información',
    body: 'Los datos de analítica se usan exclusivamente para entender qué contenido resulta útil a los visitantes y mejorar el sitio. La información que nos compartes por WhatsApp o correo se usa únicamente para responder tu consulta o gestionar el proyecto que nos encargues, y no se comparte con terceros ni se usa con fines comerciales distintos.',
  },
  {
    title: '4. Servicios de terceros',
    body: 'Este sitio utiliza Google Analytics (Google LLC) para medición de tráfico, y WhatsApp (Meta Platforms, Inc.) como canal de contacto directo. Ambos servicios tienen sus propias políticas de privacidad, que puedes consultar en los sitios oficiales de Google y Meta respectivamente.',
  },
  {
    title: '5. Tus derechos',
    body: 'Puedes solicitar en cualquier momento que eliminemos cualquier información de contacto que nos hayas compartido, revocar tu consentimiento de cookies borrando los datos de navegación de tu navegador, o escribirnos con cualquier duda sobre el manejo de tus datos.',
  },
  {
    title: '6. Cambios a esta política',
    body: 'Esta política puede actualizarse ocasionalmente para reflejar cambios en las herramientas que usamos o en la normativa aplicable. La fecha de la última actualización aparece al final de esta página.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24">
      <div className="max-w-3xl mx-auto">
        <FadeIn y={-20}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm transition-opacity duration-200 hover:opacity-70 mb-12 sm:mb-16"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1
            className="hero-heading font-black uppercase leading-none tracking-tight mb-10 sm:mb-14"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            Política de Privacidad
          </h1>
        </FadeIn>

        <div className="flex flex-col gap-10 sm:gap-12">
          {SECTIONS.map((section, i) => (
            <FadeIn key={section.title} delay={0.15 + i * 0.05}>
              <div>
                <h2 className="text-[#D7E2EA] font-medium uppercase tracking-wide text-lg sm:text-xl mb-3">
                  {section.title}
                </h2>
                <p className="text-[#D7E2EA] font-light leading-relaxed opacity-70 text-sm sm:text-base">
                  {section.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="text-[#D7E2EA] opacity-40 text-xs uppercase tracking-wider mt-16 sm:mt-20">
            Última actualización: julio de 2026
          </p>
        </FadeIn>
      </div>
    </div>
  );
}