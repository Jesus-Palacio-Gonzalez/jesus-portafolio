import type { IconType } from 'react-icons';
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiSanity,
} from 'react-icons/si';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface Project {
  number: string;
  category: string;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
}

const TECH_ICONS: Record<string, IconType> = {
  React: SiReact,
  'Tailwind CSS': SiTailwindcss,
  'Framer Motion': SiFramer,
  TypeScript: SiTypescript,
  'Node.js': SiNodedotjs,
  PostgreSQL: SiPostgresql,
  'Sanity CMS': SiSanity,
};

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Client',
    name: 'Diosa Interior',
    description:
      'Landing page de e-commerce para una marca de moda femenina, enfocada en storytelling visual y conversión.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: '/assets/diosainterior.png',
    link: 'https://example.com/diosa-interior',
  },
  {
    number: '02',
    category: 'Personal',
    name: 'POSTECH',
    description:
      'Plataforma web para servicios tecnológicos, con panel de administración y gestión de solicitudes en tiempo real.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    image: '/assets/postech.png',
    link: 'https://example.com/postech',
  },
  {
    number: '03',
    category: 'Client',
    name: 'FrankSMART',
    description:
      'Sitio corporativo con integración de CMS headless para que el cliente actualice contenido sin tocar código.',
    techStack: ['React', 'Tailwind CSS', 'Sanity CMS'],
    image: '/assets/franksmart.png',
    link: 'https://example.com/franksmart',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeIn delay={index * 0.1} y={40} className="group">
      <div className="rounded-[30px] sm:rounded-[40px] border border-[#D7E2EA]/15 bg-[#141414] overflow-hidden flex flex-col h-full transition-colors duration-300 hover:border-[#D7E2EA]/40">
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={project.image}
            alt={`${project.name} showcase`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(12,12,12,0) 50%, rgba(12,12,12,0.85) 100%)',
            }}
          />
          <span className="absolute top-4 left-4 sm:top-5 sm:left-5 text-[#D7E2EA] font-black text-2xl sm:text-3xl opacity-80">
            {project.number}
          </span>
          <span className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm rounded-full border border-[#D7E2EA]/30 px-3 py-1 bg-[#0C0C0C]/60">
            {project.category}
          </span>
        </div>

        <div className="flex flex-col flex-1 p-6 sm:p-8 gap-4">
          <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl">
            {project.name}
          </h3>

          <p className="text-[#D7E2EA] font-light leading-relaxed opacity-60 text-sm sm:text-base flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => {
              const Icon = TECH_ICONS[tech];
              return (
                <span
                  key={tech}
                  className="flex items-center gap-1.5 text-[#D7E2EA] text-xs uppercase tracking-wide rounded-full border border-[#D7E2EA]/20 px-3 py-1 opacity-70"
                >
                  {Icon && <Icon size={13} />}
                  {tech}
                </span>
              );
            })}
          </div>

          <LiveProjectButton href={project.link} className="w-full mt-2">
            Ver Proyecto
          </LiveProjectButton>
        </div>
      </div>
    </FadeIn>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}