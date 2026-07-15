import { Heart, Instagram, Facebook, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { Link } from 'react-router-dom';

const NAV_LINKS = ['About', 'Services', 'Projects', 'Contact'];

const SOCIALS = [
  { icon: Instagram, href: 'https://www.instagram.com/jesuspalaciog/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/Palaciotechsas', label: 'Facebook' },
  { icon: Github, href: 'https://github.com/Jesus-Palacio-Gonzalez', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jesus-palacio-346834202/?isSelfProfile=true', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:jesuspalaciogonzalez@gmail.com', label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 overflow-hidden">
      <div className="flex flex-col items-center text-center gap-8 sm:gap-10 md:gap-12 max-w-4xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
          >
            ¡Vamos a crear!
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide"
            style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
          >
            ¿Tienes un proyecto en mente? ¡Hagámoslo realidad!
          </p>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn delay={0.3} y={20}>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-16 sm:mt-20 md:mt-24">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base transition-opacity duration-200 hover:opacity-70"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      <FadeIn delay={0.35} y={20}>
        <div className="flex justify-center gap-6 mt-8">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.4} y={10}>
  <div
    className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-14 sm:mt-16 md:mt-20 pt-6 sm:pt-8"
    style={{ borderTop: '1px solid rgba(215, 226, 234, 0.15)' }}
  >
    <span className="text-[#D7E2EA] text-xs sm:text-sm opacity-50 uppercase tracking-wider">
      © {year} Jack. All rights reserved.
    </span>

    <Link
      to="/privacidad"
      className="text-[#D7E2EA] text-xs sm:text-sm opacity-50 uppercase tracking-wider transition-opacity duration-200 hover:opacity-80"
    >
      Política de Privacidad
    </Link>

    <span className="flex items-center gap-1.5 text-[#D7E2EA] text-xs sm:text-sm opacity-70 uppercase tracking-wider">
      Hecho con amor
      <motion.span
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        className="inline-flex"
      >
        <Heart size={14} fill="#B600A8" color="#B600A8" />
      </motion.span>
    </span>
  </div>
</FadeIn>
    </footer>
  );
}
