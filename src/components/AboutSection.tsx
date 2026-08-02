'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const WORK_PRINCIPLES = [
  'Entender o problema antes de escolher a tecnologia.',
  'Construir o caminho menor que ainda sustenta manutenção e evolução.',
  'Usar IA aplicada quando ela reduz fricção real, não como efeito de vitrine.',
];

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 px-6 py-24">
      <div className="premium-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="premium-card overflow-hidden"
        >
          <Image
            src="/images/IMG_2250.jpg"
            alt="Foto de Matheus Diniz Gruber"
            width={560}
            height={640}
            className="h-[460px] w-full object-cover object-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="space-y-7"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold text-blue-300">Perfil e modo de trabalho</p>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
              Engenharia com leitura de produto, arquitetura e execução.
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              Atuo conectando arquitetura, backend, front-end, UI/UX, integrações e publicação para transformar ideias complexas em produtos usáveis, operáveis e claros para quem decide.
            </p>
          </div>

          <div className="space-y-3">
            {WORK_PRINCIPLES.map((principle) => (
              <div key={principle} className="rounded-2xl border border-slate-800 bg-slate-950/45 p-4 text-sm leading-6 text-slate-300">
                {principle}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
