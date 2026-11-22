'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import ScrollWordReveal from '@/components/ui/ScrollWordReveal';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      const allSections = servicesRef.current.filter(Boolean) as HTMLDivElement[];
      const pinOffset = 50;
      allSections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: `top ${pinOffset + index * 120}px`,
          endTrigger: allSections[allSections.length - 1],
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
        });
      });
    }, sectionRef);
    return () => mm.revert();
  }, []);

  const headingWords = [
    { t: 'How' },
    { t: 'I' },
    { t: 'work', serif: true },
  ];
  const descriptionText =
    'I take a product from a rough idea to something that works, and stay responsible for the decisions along the way.';

  const services = [
    {
      id: '01',
      title: 'Idea to Working Product',
      aside: 'From a rough idea to something you can click.',
      description:
        'I start with the problem, work out the smallest version that would actually be useful, and build it. AI helps me get there quickly; the product decisions stay with me.',
      items: [
        'Turning a rough idea into a working build',
        'Scoping what the first version should do',
        'Shipping something usable, not a demo',
      ],
    },
    {
      id: '02',
      title: 'AI-Assisted Development',
      aside: 'Speed, with a human check on every step.',
      description:
        'I work with AI coding agents and modern tooling, then read, test and correct what they produce. The tools generate a lot of code; I decide what belongs in the product.',
      items: [
        'AI coding agents inside the build loop',
        'Prototyping and iterating quickly',
        'Reading and correcting generated code',
      ],
    },
    {
      id: '03',
      title: 'Judgment, Testing & Delivery',
      aside: 'The part that cannot be automated away.',
      description:
        'Speed only helps if the result holds up. I test what I ship, check it at real screen sizes, and make the calls AI cannot: what to cut, what to fix, and when it is good enough to release.',
      items: [
        'Testing across desktop and mobile',
        'Fixing what the build got wrong',
        'Calls on scope, quality and release',
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="min-h-screen bg-ink text-light pt-20 pb-10 md:pt-32 md:pb-20 px-6 sm:px-8 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-20">
          <AnimatedHeading
            words={headingWords}
            className="text-[clamp(2.5rem,7vw,6.5rem)] mb-4"
          />

          <div className="grid md:grid-cols-12 gap-4 md:gap-8">
            <div className="md:col-start-6 md:col-span-7 flex flex-col md:flex-row gap-3 md:gap-10">

              <ScrollWordReveal
                text={descriptionText}
                offset={['start 0.95', 'end 0.65']}
                className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed"
              />
            </div>
          </div>
        </div>

        <div className="relative pb-0 md:pb-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                servicesRef.current[index] = el;
              }}
              className="mb-6 md:mb-24 rounded-[2rem] md:rounded-[2.5rem] bg-surface-card border border-surface-border p-6 sm:p-8 md:px-12 md:pt-8 md:pb-12 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]"
              style={{ zIndex: index + 1 }}
            >
              <div className="grid md:grid-cols-12 gap-4 items-center pb-4 md:pb-0 md:h-14">
                <h3
                  className="font-display md:col-span-10 text-light font-semibold tracking-[-0.035em] text-2xl md:text-4xl lg:text-5xl leading-none"
                  
                >
                  {service.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-12 gap-4 md:gap-8 pt-4 md:pt-10">
                <p aria-hidden="true" className="hidden md:block md:col-span-4 serif-accent text-accent text-3xl lg:text-[2.6rem] leading-[1.1] pr-6">
                  {service.aside}
                </p>
                <div className="md:col-span-7 md:col-start-6 space-y-4 md:space-y-6">
                  <ScrollWordReveal
                    text={service.description}
                    offset={['start 0.95', 'end 0.7']}
                    className="text-gray-soft text-base sm:text-base md:text-lg leading-relaxed font-sans"
                  />

                  <div className="divide-y divide-border-subtle">
                    {service.items.map((item, i) => (
                      <div key={i} className="py-3 flex items-center gap-3 md:gap-4">
                        <span aria-hidden="true" className="text-accent text-[9px] shrink-0">
                          ◆
                        </span>
                        <span className="text-base md:text-lg font-medium font-sans text-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
