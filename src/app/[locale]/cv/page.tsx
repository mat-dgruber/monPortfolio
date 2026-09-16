import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  ArrowLeft,
  Mail,
  Github,
  Globe,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import {
  WHATSAPP_LINK,
  WHATSAPP_NUMBER_DISPLAY,
  CONTACT_EMAIL,
  GITHUB_URL,
} from '@/lib/constants';
import CvActionControls from '@/components/CvActionControls';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Resume & Curriculum Vitae · Matheus Gruber'
      : 'Currículo Profissional · Matheus Gruber',
    description: isEn
      ? 'Curriculum Vitae of Matheus Gruber: Fullstack Software Engineer & AI Systems Architect.'
      : 'Currículo profissional de Matheus Gruber: Engenheiro de Software Fullstack e Arquiteto de Sistemas de IA.',
  };
}

export default async function CvPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'cv' });
  const isEn = locale === 'en';

  return (
    <div className="min-h-screen bg-[#0A0C0E] text-[#EDE7DC] selection:bg-[#E8913C]/30 selection:text-[#EDE7DC] print:bg-white print:text-black font-sans py-8 sm:py-12 px-4 sm:px-6">
      {/* Interactive Floating Action Bar (Hidden on Print) */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between gap-4 print:hidden">
        <Link
          href={`/${locale}`}
          className="font-body inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9EA5A8] hover:text-[#3FA2AD] transition-colors px-3 py-1.5 rounded-full border border-[rgba(237,231,220,0.15)] bg-[#101317]/80 backdrop-blur-md"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t('backLink')}</span>
        </Link>

        {/* Client-side Controls (Print & Language Switcher) */}
        <CvActionControls
          locale={locale}
          printLabel={t('printBtn')}
        />
      </div>

      {/* Main Resume Sheet */}
      <main className="max-w-4xl mx-auto rounded-md border border-[rgba(237,231,220,0.14)] bg-[#101317] p-7 sm:p-12 shadow-2xl print:border-none print:shadow-none print:p-0 print:bg-white">
        {/* Header Block */}
        <header className="border-b border-[rgba(237,231,220,0.12)] print:border-neutral-300 pb-6 mb-7">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h1 className="font-display font-extrabold text-[32px] sm:text-[40px] tracking-[-0.03em] text-[#EDE7DC] print:text-black uppercase">
              MATHEUS GRUBER<span className="text-[#3FA2AD] print:text-neutral-800">.</span>
            </h1>
            <span className="font-body text-[11.5px] uppercase tracking-[0.12em] text-[#3FA2AD] print:text-neutral-700 font-semibold">
              {isEn ? 'Available for Global / Remote Roles' : 'Disponível para Trabalho Remoto'}
            </span>
          </div>

          <p className="font-display font-semibold text-[17px] sm:text-[19px] text-[#EDE7DC]/90 print:text-neutral-800 mt-1">
            {t('headline')}
          </p>

          <p className="font-body text-[12px] text-[#9EA5A8] print:text-neutral-600 mt-1">
            {t('location')}
          </p>

          {/* Contact Bar */}
          <div className="mt-4 pt-3 border-t border-[rgba(237,231,220,0.08)] print:border-neutral-200 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11.5px] font-body text-[#9EA5A8] print:text-neutral-700">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-1.5 hover:text-[#3FA2AD] transition-colors print:text-neutral-800"
            >
              <Mail className="w-3.5 h-3.5 text-[#3FA2AD] print:hidden" />
              <span>{CONTACT_EMAIL}</span>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#3FA2AD] transition-colors print:text-neutral-800"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#3FA2AD] print:hidden" />
              <span>{WHATSAPP_NUMBER_DISPLAY}</span>
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#3FA2AD] transition-colors print:text-neutral-800"
            >
              <Github className="w-3.5 h-3.5 text-[#3FA2AD] print:hidden" />
              <span>github.com/mat-dgruber</span>
            </a>

            <a
              href={`https://monportfolio-dgruber.web.app/${locale}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#3FA2AD] transition-colors print:text-neutral-800"
            >
              <Globe className="w-3.5 h-3.5 text-[#3FA2AD] print:hidden" />
              <span>monportfolio-dgruber.web.app</span>
            </a>
          </div>
        </header>

        {/* Section: Professional Summary */}
        <section className="mb-8">
          <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-[#3FA2AD] print:text-neutral-900 border-b border-[rgba(63,162,173,0.3)] print:border-neutral-400 pb-1 mb-3">
            {t('summaryTitle')}
          </h2>
          <p className="font-body text-[13.5px] sm:text-[14px] text-[#EDE7DC]/85 print:text-neutral-800 leading-relaxed">
            {t('summaryText')}
          </p>
        </section>

        {/* Section: Core Competencies */}
        <section className="mb-8">
          <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-[#3FA2AD] print:text-neutral-900 border-b border-[rgba(63,162,173,0.3)] print:border-neutral-400 pb-1 mb-3">
            {t('competenciesTitle')}
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 font-body text-[12.5px] leading-relaxed">
            <div>
              <span className="font-semibold text-[#EDE7DC] print:text-neutral-900 block">
                {t('compLanguagesLabel')}:
              </span>
              <span className="text-[#9EA5A8] print:text-neutral-700">
                {t('compLanguagesVal')}
              </span>
            </div>
            <div>
              <span className="font-semibold text-[#EDE7DC] print:text-neutral-900 block">
                {t('compAiLabel')}:
              </span>
              <span className="text-[#9EA5A8] print:text-neutral-700">
                {t('compAiVal')}
              </span>
            </div>
            <div>
              <span className="font-semibold text-[#EDE7DC] print:text-neutral-900 block">
                {t('compFrontendLabel')}:
              </span>
              <span className="text-[#9EA5A8] print:text-neutral-700">
                {t('compFrontendVal')}
              </span>
            </div>
            <div>
              <span className="font-semibold text-[#EDE7DC] print:text-neutral-900 block">
                {t('compBackendLabel')}:
              </span>
              <span className="text-[#9EA5A8] print:text-neutral-700">
                {t('compBackendVal')}
              </span>
            </div>
            <div className="sm:col-span-2">
              <span className="font-semibold text-[#EDE7DC] print:text-neutral-900 block">
                {t('compSystemsLabel')}:
              </span>
              <span className="text-[#9EA5A8] print:text-neutral-700">
                {t('compSystemsVal')}
              </span>
            </div>
          </div>
        </section>

        {/* Section: Professional Experience */}
        <section className="mb-8">
          <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-[#3FA2AD] print:text-neutral-900 border-b border-[rgba(63,162,173,0.3)] print:border-neutral-400 pb-1 mb-4">
            {t('experienceTitle')}
          </h2>

          <div className="space-y-6">
            {/* Role 1 */}
            <div className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-display font-semibold text-[15px] sm:text-[16px] text-[#EDE7DC] print:text-neutral-900">
                  {isEn ? 'Fullstack Software Engineer' : 'Engenheiro de Software Fullstack'}
                </h3>
                <span className="font-body text-[11px] font-semibold text-[#3FA2AD] print:text-neutral-700 tracking-[0.08em]">
                  2026 — {isEn ? 'PRESENT' : 'PRESENTE'}
                </span>
              </div>
              <div className="font-body text-[12px] text-[#9EA5A8] print:text-neutral-600 mb-2">
                Casa Publicadora Brasileira (CPB) · Tatuí, Brazil
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1.5 font-body text-[13px] text-[#EDE7DC]/85 print:text-neutral-800 leading-relaxed">
                {isEn ? (
                  <>
                    <li>
                      Architected and deployed high-availability Backend-for-Frontend (BFF) layers with FastAPI and Angular, eliminating friction between legacy internal ERPs and modern microservices for 1,000+ users.
                    </li>
                    <li>
                      Designed strictly typed, schema-validated API contracts (Pydantic/Zod) and domain services following Clean Architecture principles, integrating unified LDAP/SSO authentication.
                    </li>
                    <li>
                      Engineered asynchronous data processing pipelines and optimized high-throughput SQL routines, accelerating end-to-end accounting reconciliation cycles by over 70%.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      Liderança e atuação na modernização de legados corporativos através da arquitetura de camadas BFF com FastAPI e Angular, unificando microsserviços e ERPs para mais de 1.000 colaboradores.
                    </li>
                    <li>
                      Desenho de contratos de API estritamente tipados e serviços de domínio sob princípios de Clean Architecture, garantindo integração resiliente com LDAP/SSO corporativo.
                    </li>
                    <li>
                      Otimização de rotinas assíncronas e consultas em SQL Server, reduzindo o tempo de conciliação financeira e contábil em mais de 70%.
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Role 2 */}
            <div className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-display font-semibold text-[15px] sm:text-[16px] text-[#EDE7DC] print:text-neutral-900">
                  {isEn ? 'Junior Systems Analyst' : 'Analista de Sistemas Júnior'}
                </h3>
                <span className="font-body text-[11px] font-semibold text-[#3FA2AD] print:text-neutral-700 tracking-[0.08em]">
                  2024 — 2026
                </span>
              </div>
              <div className="font-body text-[12px] text-[#9EA5A8] print:text-neutral-600 mb-2">
                Casa Publicadora Brasileira (CPB) · Tatuí, Brazil
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1.5 font-body text-[13px] text-[#EDE7DC]/85 print:text-neutral-800 leading-relaxed">
                {isEn ? (
                  <>
                    <li>
                      Maintained and evolved mission-critical enterprise ERP systems and Point-of-Sale (POS) transaction engines across distributed branches.
                    </li>
                    <li>
                      Conducted SQL Server performance diagnosis, index optimization, and transactional isolation tuning to guarantee high concurrency and data integrity during peak operations.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      Sustentação e evolução contínua de rotinas em sistemas corporativos ERP e pontos de venda (PDV) para operações críticas de filiais em tempo real.
                    </li>
                    <li>
                      Diagnóstico de performance, reescrita de stored procedures e tuning de índices em SQL Server para eliminação de gargalos transacionais.
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Featured Projects & Systems */}
        <section className="mb-8 break-inside-avoid">
          <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-[#3FA2AD] print:text-neutral-900 border-b border-[rgba(63,162,173,0.3)] print:border-neutral-400 pb-1 mb-4">
            {t('projectsTitle')}
          </h2>

          <div className="space-y-4 font-body text-[13px] text-[#EDE7DC]/85 print:text-neutral-800 leading-relaxed">
            {/* Project 1 */}
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display font-semibold text-[14.5px] text-[#EDE7DC] print:text-neutral-900">
                  OpenClaude CLI —{' '}
                  <span className="font-normal text-[12.5px] text-[#9EA5A8] print:text-neutral-600">
                    {isEn
                      ? 'Terminal-First AI Agent Orchestrator & MCP Tool Harness'
                      : 'Orquestrador de Modelos de IA e Ferramentas MCP'}
                  </span>
                </span>
                <a
                  href="https://github.com/mat-dgruber/openclaude"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[11px] text-[#3FA2AD] print:text-neutral-700 hover:underline flex items-center gap-1"
                >
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="pt-1 text-[12.5px] text-[#9EA5A8] print:text-neutral-700">
                {isEn
                  ? 'Engineered a modular CLI agent orchestrator with Model Context Protocol (MCP), dynamic multi-provider LLM tool calling (OpenAI/Gemini/Claude/Ollama), and deterministic context window pruning.'
                  : 'Orquestrador CLI modular baseado no protocolo MCP para chamada de ferramentas em LLMs, suporte multi-provedor e execução local via Ollama.'}
              </p>
            </div>

            {/* Project 2 */}
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display font-semibold text-[14.5px] text-[#EDE7DC] print:text-neutral-900">
                  Harpia Programming Language —{' '}
                  <span className="font-normal text-[12.5px] text-[#9EA5A8] print:text-neutral-600">
                    {isEn
                      ? 'Reactive Programming Language with Custom Go VM'
                      : 'Linguagem Reativa com Compilador e VM em Go'}
                  </span>
                </span>
                <a
                  href="https://github.com/mat-dgruber/harpia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[11px] text-[#3FA2AD] print:text-neutral-700 hover:underline flex items-center gap-1"
                >
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="pt-1 text-[12.5px] text-[#9EA5A8] print:text-neutral-700">
                {isEn
                  ? 'Authored an end-to-end compiler pipeline in Go: lexical tokenizer, recursive AST parser, custom bytecode emission, and a reactive virtual machine runtime with signal propagation.'
                  : 'Compilador autoral e máquina virtual desenvolvidos em Go: tokenizer léxico, parser sintático AST, emissão de bytecode e runtime com sinais reativos.'}
              </p>
            </div>

            {/* Project 3 */}
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display font-semibold text-[14.5px] text-[#EDE7DC] print:text-neutral-900">
                  monFinTrack —{' '}
                  <span className="font-normal text-[12.5px] text-[#9EA5A8] print:text-neutral-600">
                    {isEn
                      ? 'Fullstack Financial Platform with Predictive AI'
                      : 'Plataforma Financeira Fullstack com IA'}
                  </span>
                </span>
                <a
                  href="https://github.com/mat-dgruber/CCAT-monFinTrack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[11px] text-[#3FA2AD] print:text-neutral-700 hover:underline flex items-center gap-1"
                >
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="pt-1 text-[12.5px] text-[#9EA5A8] print:text-neutral-700">
                {isEn
                  ? 'Fullstack enterprise suite with Angular, FastAPI, and Gemini API OCR for invoice parsing, multi-account ledger, and automated transaction categorization.'
                  : 'Plataforma fullstack em Angular e FastAPI com OCR de comprovantes via Gemini API e conciliação contábil automatizada.'}
              </p>
            </div>
          </div>
        </section>

        {/* Section: Education */}
        <section className="mb-7 break-inside-avoid">
          <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-[#3FA2AD] print:text-neutral-900 border-b border-[rgba(63,162,173,0.3)] print:border-neutral-400 pb-1 mb-3">
            {t('educationTitle')}
          </h2>

          <div className="space-y-3 font-body text-[12.5px]">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#EDE7DC] print:text-neutral-900">
                  {isEn
                    ? 'Postgraduate in Applied Artificial Intelligence Engineering'
                    : 'Pós-Graduação em Engenharia de IA Aplicada'}
                </span>
                <span className="text-[#3FA2AD] print:text-neutral-700 font-medium text-[11px]">
                  2025 — {isEn ? 'In Progress' : 'Em Andamento'}
                </span>
              </div>
              <p className="text-[#9EA5A8] print:text-neutral-600 text-[12px]">
                UNIPDS / Faculdade Anhanguera · {isEn ? 'Focus on Autonomous Agents, MCP Protocol, RAG Pipelines & Context Architecture.' : 'Foco em Agentes Autônomos, Protocolo MCP e RAG.'}
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#EDE7DC] print:text-neutral-900">
                  {isEn
                    ? 'B.S. in Systems Analysis and Development'
                    : 'Graduação em Análise e Desenvolvimento de Sistemas'}
                </span>
                <span className="text-[#3FA2AD] print:text-neutral-700 font-medium text-[11px]">
                  2023 — 2024
                </span>
              </div>
              <p className="text-[#9EA5A8] print:text-neutral-600 text-[12px]">
                Universidade Cruzeiro do Sul · {isEn ? 'Focus on Algorithmic Complexity, Data Structures, Computer Architecture & Clean Code.' : 'Foco em Estruturas de Dados, Complexidade de Algoritmos e Engenharia de Software.'}
              </p>
            </div>
          </div>
        </section>

        {/* Section: Languages */}
        <section className="break-inside-avoid pt-2 border-t border-[rgba(237,231,220,0.08)] print:border-neutral-200">
          <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-[#3FA2AD] print:text-neutral-900 mb-2">
            {t('languagesTitle')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 font-body text-[12px] text-[#EDE7DC]/85 print:text-neutral-800">
            <div>
              <span className="font-semibold text-[#EDE7DC] print:text-neutral-900">• {t('langPt')}</span>
            </div>
            <div>
              <span className="font-semibold text-[#EDE7DC] print:text-neutral-900">• {t('langEn')}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
