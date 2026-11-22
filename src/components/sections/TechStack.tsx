'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';
import { useReducedMotion } from '@/lib/useReducedMotion';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import ScrollWordReveal from '@/components/ui/ScrollWordReveal';

export interface TechItem {
  name: string;
  description: string;
  href?: string;
  monogram?: string;
}

export interface StackCategory {
  id: string;
  title: string;
  label: string;
  description?: string;
  technologies: TechItem[];
}

export const STACK_SECTIONS: StackCategory[] = [
  {
    id: 'agents',
    title: 'AI coding agents & environments',
    label: 'Coding agents',
    technologies: [
      {
        name: 'Dyad',
        description: 'Open-source desktop app for building apps with AI.',
        href: 'https://www.dyad.sh/',
      },
      {
        name: 'Freebuff',
        description: 'Coding agent across desktop, CLI and cloud.',
        href: 'https://freebuff.ai/',
      },
      {
        name: 'Kilo Code',
        description: 'Open-source coding assistant for editors and terminal.',
        href: 'https://kilo.ai/',
      },
      {
        name: 'OpenCode',
        description: 'Open-source coding agent for terminal, desktop and SDK.',
        href: 'https://opencode.ai/',
      },
      {
        name: 'Cline',
        description: 'Open-source coding agent for editors and terminal.',
        href: 'https://cline.bot/',
      },
      {
        name: 'Roo Code',
        description: 'Agent with separate coding, planning and debug modes.',
        href: 'https://github.com/RooCodeInc/Roo-Code',
      },
      {
        name: 'Aider',
        description: 'Terminal pair-programming over an existing codebase.',
        href: 'https://aider.chat/',
      },
      {
        name: 'Continue',
        description: 'Open-source coding agent that plugs into your IDE.',
        href: 'https://continue.dev/',
      },
    ],
  },
  {
    id: 'providers',
    title: 'Model providers & infrastructure',
    label: 'Model infra',
    technologies: [
      {
        name: 'Kira AI',
        description: 'API platform for chat, image, video and speech models.',
        href: 'https://kiraai.vn/',
      },
      {
        name: 'Kilo Gateway',
        description: 'One gateway for routing requests across model providers.',
        href: 'https://kilo.ai/gateway',
      },
      {
        name: 'OpenRouter',
        description: 'Single API across many models, with routing and fallbacks.',
        href: 'https://openrouter.ai/',
      },
      {
        name: 'NVIDIA NIM',
        description: 'Prebuilt inference microservices for NVIDIA hardware.',
        href: 'https://www.nvidia.com/en-us/ai-data-science/products/nim-microservices',
      },
      {
        name: 'Hugging Face',
        description: 'Models, datasets and demos from the ML community.',
        href: 'https://huggingface.co/',
      },
      {
        name: 'Groq',
        description: 'Fast model inference on LPU hardware.',
        href: 'https://groq.com/inference',
      },
      {
        name: 'Together AI',
        description: 'Hosted inference for open-source models.',
        href: 'https://together.ai/inference',
      },
      {
        name: 'Fireworks AI',
        description: 'Serving platform for open models and custom deployments.',
        href: 'https://fireworks.ai/inference',
      },
      {
        name: 'Cerebras',
        description: 'Inference cloud built on wafer-scale chips.',
        href: 'https://www.cerebras.ai/inference',
      },
    ],
  },
  {
    id: 'models',
    title: 'Models & experimentation',
    label: 'Models',
    technologies: [
      {
        name: 'Gemini Playground',
        description: 'Trying Gemini models and prompts in AI Studio.',
        href: 'https://aistudio.google.com/',
      },
      {
        name: 'Qwen',
        description: 'The Qwen model family and assistant.',
        href: 'https://qwen.ai/',
      },
      {
        name: 'DeepSeek',
        description: 'DeepSeek models, app and API.',
        href: 'https://www.deepseek.com/',
      },
      {
        name: 'Llama',
        description: "Meta's open-weight Llama models.",
        href: 'http://llama.meta.com/',
      },
      {
        name: 'GPT-OSS',
        description: "OpenAI's open-weight reasoning models.",
        href: 'https://openai.com/open-models',
      },
    ],
  },
  {
    id: 'automation',
    title: 'Automation & backend',
    label: 'Automation',
    technologies: [
      {
        name: 'n8n',
        description: 'Workflow automation with AI steps.',
        href: 'https://n8n.io/',
      },
      {
        name: 'Convex',
        description: 'Reactive backend: database plus server functions.',
        href: 'https://www.convex.dev/',
      },
      {
        name: 'Supabase',
        description: 'Postgres backend with auth, storage and APIs.',
        href: 'https://supabase.com/',
      },
    ],
  },
  {
    id: 'discovery',
    title: 'Creative development & discovery',
    label: 'Discovery',
    technologies: [
      {
        name: 'MotionSites',
        description: 'Design references and prompts for AI site builders.',
        href: 'https://motionsites.ai/',
      },
      {
        name: 'Codrops',
        description: 'Creative front-end demos, tutorials and case studies.',
        href: 'https://codrops.com/',
      },
      {
        name: 'React Bits',
        description: 'Open-source animated React components.',
        href: 'https://reactbits.dev/',
      },
      {
        name: 'ScrollHaus',
        description: 'Animated site templates you can preview by scrolling.',
        href: 'https://scrollhaus.ai/',
      },
      {
        name: 'Awwwards',
        description: 'Awards platform and showcase for web design.',
        href: 'https://www.awwwards.com/',
      },
      {
        name: 'Godly',
        description: 'Curated gallery of web design inspiration.',
        href: 'https://godly.website/',
      },
      {
        name: 'Lapa Ninja',
        description: 'Landing-page inspiration archive.',
        href: 'https://www.lapa.ninja/',
      },
      {
        name: 'Mobbin',
        description: 'Library of real app and web screens and flows.',
        href: 'https://mobbin.com/',
      },
    ],
  },
  {
    id: 'skills',
    title: 'Design skills & guidelines',
    label: 'Design skills',
    technologies: [
      {
        name: 'Frontend Design',
        description: 'Skill covering layout, type and colour decisions.',
      },
      {
        name: 'UI UX Pro Max',
        description: 'Design skill with styles, palettes and UX rules.',
        href: 'https://uupm.cc/',
      },
      {
        name: 'Emil Kowalski Design Skills',
        description: 'Interface and motion guidance packaged for agents.',
        href: 'https://emilkowal.ski/skill',
      },
      {
        name: 'Meng To Design & Web Skills',
        description: 'Agent skills for web design and motion workflows.',
        href: 'https://github.com/MengTo/Skills',
      },
      {
        name: 'Web Motion by SvaraNova',
        description: 'Animation reference skills for agent workflows.',
      },
      {
        name: 'Vercel Web Design Guidelines',
        description: 'Guidance on accessibility, interaction and layout.',
        href: 'https://vercel.com/design/guidelines',
      },
      {
        name: 'Web Performance',
        description: 'Notes and checklists on making pages feel fast.',
      },
      {
        name: 'Accessibility',
        description: 'Keyboard, contrast and screen-reader checks.',
      },
      {
        name: 'React Best Practices',
        description: 'Patterns for maintainable React code.',
      },
      {
        name: 'UnSLOP',
        description: 'Skill for removing generic "AI-looking" interface work.',
        href: 'https://github.com/heydamir/unslop',
        monogram: 'US',
      },
    ],
  },
  {
    id: 'creative',
    title: 'AI creative tools',
    label: 'Creative tools',
    technologies: [
      {
        name: 'Lumen AI Video Editor',
        description: 'Open-source desktop editor with an AI timeline copilot.',
        href: 'https://github.com/Mas-inx/lumen-ai-video-editor',
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Modern frontend & interactive web',
    label: 'Frontend',
    technologies: [
      {
        name: 'React',
        description: 'Component library for web and native interfaces.',
        href: 'https://react.dev/',
      },
      {
        name: 'TypeScript',
        description: 'Typed JavaScript for safer refactors.',
        href: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Vite',
        description: 'Fast dev server and build tool.',
        href: 'https://vite.dev/',
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first styling written in markup.',
        href: 'https://tailwindcss.com/docs',
      },
      {
        name: 'Framer Motion',
        description: 'Animation library for React and JavaScript.',
        href: 'https://motion.dev/',
      },
      {
        name: 'GSAP',
        description: 'Timeline-driven animation for the web.',
        href: 'https://gsap.com/',
      },
      {
        name: 'Lenis',
        description: 'Smooth scrolling without the jank.',
        href: 'https://lenis.dev/',
      },
      {
        name: 'Three.js',
        description: '3D graphics in the browser.',
        href: 'https://threejs.org/',
      },
      {
        name: 'React Three Fiber',
        description: 'Three.js scenes written as React components.',
        href: 'https://r3f.docs.pmnd.rs/',
        monogram: 'R3F',
      },
      {
        name: 'Lucide',
        description: 'Open-source vector icon set.',
        href: 'https://lucide.dev/guide',
      },
      {
        name: 'Playwright',
        description: 'Browser automation and end-to-end testing.',
        href: 'https://playwright.dev/',
      },
      {
        name: 'CSS Animations API',
        description: 'Native CSS transitions and keyframes.',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations',
      },
      {
        name: 'Web Animations API',
        description: 'Scripted animation built into the browser.',
        href: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API',
      },
    ],
  },
  {
    id: 'ship',
    title: 'Ship & collaborate',
    label: 'Ship & collaborate',
    technologies: [
      {
        name: 'GitHub',
        description: 'Version control and collaboration.',
        href: 'https://github.com/',
      },
      {
        name: 'Vercel',
        description: 'Build, preview and host frontend projects.',
        href: 'https://vercel.com/',
      },
    ],
  },
];

// Real icons pulled from each tool's own site (or its repo owner) and normalised to 128px.
const TOOL_ICONS: Record<string, string> = {
  Dyad: '/tools/dyad.png',
  Freebuff: '/tools/freebuff.png',
  'Kilo Code': '/tools/kilo-code.png',
  OpenCode: '/tools/opencode.png',
  Cline: '/tools/cline.png',
  Aider: '/tools/aider.png',
  Continue: '/tools/continue.png',
  'Kira AI': '/tools/kira-ai.png',
  'Kilo Gateway': '/tools/kilo-gateway.png',
  OpenRouter: '/tools/openrouter.png',
  'NVIDIA NIM': '/tools/nvidia-nim.png',
  'Hugging Face': '/tools/hugging-face.png',
  Groq: '/tools/groq.png',
  'Together AI': '/tools/together-ai.png',
  'Fireworks AI': '/tools/fireworks-ai.png',
  Cerebras: '/tools/cerebras.png',
  'Gemini Playground': '/tools/gemini-playground.png',
  Qwen: '/tools/qwen.png',
  DeepSeek: '/tools/deepseek.png',
  Llama: '/tools/llama.png',
  'GPT-OSS': '/tools/gpt-oss.png',
  n8n: '/tools/n8n.png',
  Convex: '/tools/convex.png',
  Supabase: '/tools/supabase.png',
  MotionSites: '/tools/motionsites.png',
  Codrops: '/tools/codrops.png',
  'React Bits': '/tools/react-bits.png',
  ScrollHaus: '/tools/scrollhaus.png',
  Awwwards: '/tools/awwwards.png',
  'Lapa Ninja': '/tools/lapa-ninja.png',
  Mobbin: '/tools/mobbin.png',
  'UI UX Pro Max': '/tools/ui-ux-pro-max.png',
  'Emil Kowalski Design Skills': '/tools/emil-kowalski-design-skills.png',
  'Vercel Web Design Guidelines': '/tools/vercel-web-design-guidelines.png',
  React: '/tools/react.png',
  TypeScript: '/tools/typescript.png',
  Vite: '/tools/vite.png',
  'Tailwind CSS': '/tools/tailwind-css.png',
  'Framer Motion': '/tools/framer-motion.png',
  GSAP: '/tools/gsap.png',
  Lenis: '/tools/lenis.png',
  'Three.js': '/tools/three-js.png',
  Lucide: '/tools/lucide.png',
  Playwright: '/tools/playwright.png',
  'CSS Animations API': '/tools/css-animations-api.png',
  'Web Animations API': '/tools/web-animations-api.png',
  GitHub: '/tools/github.png',
  Vercel: '/tools/vercel.png',
};

const TILT = [-5, 3, -2, 4, -4, 2, -3, 5];

const initials = (name: string) =>
  name
    .split(/[\s-]+/)
    .filter((w) => /[A-Za-z0-9]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

const Sticker = ({
  tech,
  index,
  isActive,
  onHover,
}: {
  tech: TechItem;
  index: number;
  isActive: boolean;
  onHover: () => void;
}) => {
  const icon = TOOL_ICONS[tech.name];
  const tilt = { '--tilt': `${TILT[index % TILT.length]}deg` } as CSSProperties;

  const content = (
    <>
      <span
        aria-hidden="true"
        className={`relative grid h-12 w-12 place-items-center rounded-[1.05rem] border transition-all duration-300 sm:h-14 sm:w-14 ${
          isActive
            ? 'border-accent/60 bg-[#f6f1e8] shadow-[0_14px_28px_-14px_rgba(0,0,0,0.95)]'
            : 'border-white/10 bg-[#efe9df] shadow-[0_10px_22px_-16px_rgba(0,0,0,0.9)]'
        }`}
        style={tilt}
      >
        {icon ? (
          <Image
            src={icon}
            alt=""
            width={56}
            height={56}
            className="h-[66%] w-[66%] object-contain"
          />
        ) : (
          <span className="font-mono text-[11px] tracking-[0.08em] text-[#2a241d]">
            {tech.monogram ?? initials(tech.name)}
          </span>
        )}
      </span>
      <span
        className={`line-clamp-3 text-center font-mono text-[9.5px] leading-[1.25] tracking-[0.04em] transition-colors duration-300 sm:text-[10px] ${
          isActive ? 'text-cream' : 'text-gray-soft'
        }`}
      >
        {tech.name}
      </span>
    </>
  );

  const className =
    'sticker group/tool relative flex w-[76px] flex-col items-center gap-2.5 no-underline outline-none sm:w-[88px]';

  const handlers = {
    onMouseEnter: onHover,
    onFocus: onHover,
  };

  return tech.href ? (
    <a
      href={tech.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...handlers}
    >
      {content}
    </a>
  ) : (
    <div className={className} {...handlers}>
      {content}
    </div>
  );
};

const StackBand = ({ stack, index }: { stack: StackCategory; index: number }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = stack.technologies[activeIndex] ?? stack.technologies[0];

  return (
    <div className="sticker-band relative border-t border-white/[0.07] py-9 first:border-t-0 first:pt-1">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <div className="flex items-baseline gap-3 sm:gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-display text-xl font-semibold leading-none tracking-[-0.035em] text-cream sm:text-2xl md:text-[1.75rem]">
            {stack.title}
          </h3>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-warm-light">
          {String(stack.technologies.length).padStart(2, '0')} tools
        </span>
      </div>

      <div className="mt-6 flex flex-wrap items-start gap-x-2 gap-y-5 sm:mt-7 sm:gap-x-3 sm:gap-y-6">
        {stack.technologies.map((tech, i) => (
          <Sticker
            key={tech.name}
            tech={tech}
            index={i}
            isActive={i === activeIndex}
            onHover={() => setActiveIndex(i)}
          />
        ))}
      </div>

      <div className="mt-6 hidden min-h-[3.1rem] items-start gap-3 border-l border-accent/50 pl-3.5 sm:flex">
        <span aria-hidden="true" className="mt-[3px] font-mono text-[10px] text-accent">
          ↳
        </span>
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream">
            {active.name}
            {active.href && <span className="text-accent"> ↗</span>}
          </p>
          <p className="mt-1 max-w-xl text-[12.5px] leading-snug text-gray-soft">
            {active.description}
          </p>
        </div>
      </div>

      <p className="sr-only">
        {stack.technologies
          .map((tech) => `${tech.name}: ${tech.description}`)
          .join('. ')}
      </p>
    </div>
  );
};

const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const headingWords = [{ t: 'What' }, { t: 'I' }, { t: 'reach', serif: true }, { t: 'for' }];
  const descriptionText =
    "Tools, models and references I keep exploring — things I've used, tested or found useful. It is a working collection, not a list of things I claim to have mastered.";

  const filterOptions = [
    { id: 'all', label: 'All Categories' },
    ...STACK_SECTIONS.map((section) => ({ id: section.id, label: section.label })),
  ];

  const visibleSections =
    activeFilter === 'all'
      ? STACK_SECTIONS
      : STACK_SECTIONS.filter((sec) => sec.id === activeFilter);

  useGSAP(
    () => {
      if (reduced) return;
      gsap.utils.toArray<HTMLElement>('.sticker-band').forEach((band) => {
        const items = band.querySelectorAll('.sticker');
        if (!items.length) return;
        gsap.fromTo(
          items,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.028,
            scrollTrigger: {
              trigger: band,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          },
        );
      });
    },
    { scope: containerRef, dependencies: [activeFilter, reduced] },
  );

  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [activeFilter]);

  return (
    <section
      ref={containerRef}
      id="tech-stack"
      className="bg-ink text-light pt-12 pb-16 md:pt-32 md:pb-20 rounded-b-4xl overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-10 md:mb-14">
          <AnimatedHeading words={headingWords} className="text-[clamp(2.5rem,7vw,6.5rem)] mb-4" />
          <ScrollWordReveal
            text={descriptionText}
            offset={['start 0.95', 'end 0.7']}
            className="text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed"
          />
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-4 sm:mb-10">
          <div
            role="group"
            aria-label="Filter technologies by category"
            className="flex flex-wrap items-center gap-2 sm:gap-2.5"
          >
            {filterOptions.map((option) => {
              const isActive = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(option.id)}
                  className={`cursor-pointer rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-all duration-300 sm:text-[11px] ${
                    isActive
                      ? 'border-cream bg-cream font-semibold text-ink shadow-md'
                      : 'border-white/10 bg-elevated-dark/60 text-gray-soft hover:border-accent/40 hover:text-cream'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-warm-light sm:block">
            Hover a tool for the note
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-surface-border bg-surface-card/70 p-4 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] sm:rounded-[2rem] sm:p-6 md:p-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative">
            {visibleSections.map((stack, index) => (
              <StackBand key={stack.id} stack={stack} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
