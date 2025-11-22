'use client';

import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef } from 'react';
const projects = [
  {
    description: 'Hoaks kesehatan menyebar cepat melalui media sosial & pesan instan',
    color: '#0BB586', // emerald-health
  },
  {
    description: 'Masyarakat sulit membedakan fakta vs klaim yang salah',
    color: '#006D77', // teal-deep
  },
  {
    description: 'Dokter & tenaga kesehatan kewalahan meluruskan informasi berulang',
    color: '#0A9A7A', // variasi emerald lebih gelap
  },
  {
    description: 'Misinformasi melemahkan ketahanan layanan JKN & ekosistem kesehatan',
    color: '#005A63', // variasi teal lebih gelap
  },
  {
    description: 'Tanpa verifikasi cepat, publik mengambil keputusan medis yang berisiko',
    color: '#0BB586', // emerald-health
  },

];
export default function Problem() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <ReactLenis root>
      <main className='bg-white' ref={container}>
        <>
          <section className='h-[70vh] w-full bg-white grid place-content-center pt-[140px]'>
            <h1 className='font-heading text-emerald-health 2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
             Mengapa SadarSehat Dibutuhkan?
            </h1>
          </section>
        </>

        <section className='w-full bg-gradient-to-b from-white to-soft-mint'>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                color={project?.color}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}
interface CardProps {
  i: number;
  description: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}
export const Card: React.FC<CardProps> = ({
  i,
  description,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          backgroundColor: 'white',
          borderColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col items-center justify-center relative -top-[25%] h-[250px] w-[70%] rounded-2xl lg:p-10 sm:p-4 p-2 origin-top border-4`}
      >
        <h2 className='font-heading text-4xl text-center font-semibold' style={{ color }}>{description}</h2>
      </motion.div>
    </div>
  );
};