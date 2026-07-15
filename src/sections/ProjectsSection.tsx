import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface Project {
  number: string;
  category: string;
  name: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Client',
    name: 'Diosa Interior',
    image: '/assets/diosainterior.png',
  },
  {
    number: '02',
    category: 'Personal',
    name: 'POSTECH',
    image: '/assets/postech.png',
  },
  {
    number: '03',
    category: 'Client',
    name: 'FrankSMART',
    image: '/assets/franksmart.png',
  },
];

const TOTAL_CARDS = PROJECTS.length;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={ref}
      className="sticky top-24 md:top-32 h-[85vh]"
      style={{ top: `${index * 28 + 96}px` }}
    >
      <motion.div
        style={{ scale }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 h-full flex flex-col gap-6"
      >
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span
            className="text-[#D7E2EA] font-black"
            style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
          >
            {project.number}
          </span>
          <div className="flex flex-col items-start sm:items-end gap-1">
            <span className="text-[#D7E2EA] uppercase tracking-widest text-sm opacity-60">
              {project.category}
            </span>
            <span className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl md:text-3xl">
              {project.name}
            </span>
          </div>
          <LiveProjectButton />
        </div>

        <div className="flex-1 min-h-0 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
          <img
            src={project.image}
            alt={`${project.name} showcase`}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
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
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
