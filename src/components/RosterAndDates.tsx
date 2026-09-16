'use client';

import { useTranslations } from 'next-intl';

interface RosterItem {
  tag: string;
  name: string;
  metric: string;
  description: string;
  appliedTechs: string;
}

interface DateEntry {
  period: string;
  role: string;
  organization: string;
  summary: string;
  skills: string[];
}

export default function RosterAndDates() {
  const t = useTranslations('roster');
  const rosterItems = (t.raw('items') as RosterItem[]) || [];
  const datesEntries = (t.raw('timeline') as DateEntry[]) || [];

  return (
    <section
      id="roster"
      className="relative py-28 bg-[#0A0C0E] border-t border-[rgba(237,231,220,0.13)]"
      aria-label={t('skillsHeadline')}
    >
      <div className="shell-container space-y-24">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3FA2AD]" />
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9EA5A8]">
              {t('label')}
            </span>
          </div>
          <h2 className="font-display font-bold text-[clamp(30px,4.2vw,52px)] text-[#EDE7DC] leading-[1.08] tracking-[-0.025em]">
            {t('skillsHeadline')}
          </h2>
          <p className="font-body text-[15px] sm:text-[16.5px] text-[#9EA5A8] leading-relaxed max-w-[50ch]">
            {t('skillsParagraph')}
          </p>
        </div>

        {/* Part 1: Didactic Roster Rows */}
        <div className="border-t border-[rgba(237,231,220,0.13)] divide-y divide-[rgba(237,231,220,0.13)]">
          {rosterItems.map((item) => (
            <div
              key={item.name}
              className="py-8 sm:py-9 space-y-3 hover:bg-[#101317]/40 transition-colors px-3 sm:px-4 rounded-sm"
            >
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-body text-[10.5px] font-bold text-[#3FA2AD] tracking-[0.14em] uppercase">
                    {item.tag}
                  </span>
                  <h3 className="font-display font-semibold text-[18px] sm:text-[22px] text-[#EDE7DC] tracking-[-0.015em]">
                    {item.name}
                  </h3>
                </div>
                <div className="font-body text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#E8913C]">
                  {item.metric}
                </div>
              </div>

              {/* Explanatory Paragraph */}
              <p className="font-body text-[14px] sm:text-[15px] text-[#9EA5A8] leading-relaxed max-w-4xl pt-1">
                {item.description}
              </p>

              {/* Applied Technologies Pill Strip */}
              <div className="pt-2 flex items-center gap-2">
                <span className="font-body text-[10.5px] uppercase tracking-[0.12em] text-[#6C7378]">
                  {t('appliedTechLabel')}
                </span>
                <span className="font-body text-[11px] text-[#EDE7DC]/80 font-medium">
                  {item.appliedTechs}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Dates Table */}
        <div id="dates" className="space-y-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[rgba(237,231,220,0.13)] pb-4">
            <div>
              <div className="flex items-center gap-2 text-[#3FA2AD] text-[10.5px] font-body uppercase tracking-[0.14em] mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
                <span>{t('timelineTag')}</span>
              </div>
              <h3 className="font-display font-semibold text-[22px] sm:text-[28px] text-[#EDE7DC] tracking-[-0.02em]">
                {t('timelineHeadline')}
              </h3>
            </div>
            <span className="font-body text-[11px] uppercase tracking-[0.14em] text-[#6C7378]">
              2023 — 2026
            </span>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[rgba(237,231,220,0.13)] text-[10.5px] font-body uppercase tracking-[0.15em] text-[#6C7378]">
                  <th className="pb-4 font-semibold w-[160px]">{t('tablePeriod')}</th>
                  <th className="pb-4 font-semibold w-[280px]">{t('tableRole')}</th>
                  <th className="pb-4 font-semibold">{t('tableImpact')}</th>
                  <th className="pb-4 font-semibold w-[220px]">{t('tableStack')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(237,231,220,0.08)]">
                {datesEntries.map((entry, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#101317]/50 transition-colors align-top"
                  >
                    <td className="py-6 font-body text-[12px] font-bold text-[#3FA2AD] tracking-[0.08em]">
                      {entry.period}
                    </td>
                    <td className="py-6 pr-6 space-y-1">
                      <div className="font-display text-[15px] font-semibold text-[#EDE7DC]">
                        {entry.role}
                      </div>
                      <div className="font-body text-[12.5px] text-[#9EA5A8]">
                        {entry.organization}
                      </div>
                    </td>
                    <td className="py-6 pr-6 font-body text-[13.5px] text-[#9EA5A8] leading-relaxed">
                      {entry.summary}
                    </td>
                    <td className="py-6 font-body text-[11.5px] text-[#6C7378] leading-normal">
                      {entry.skills.join(' · ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile & Tablet Card List */}
          <div className="grid lg:hidden gap-6 divide-y divide-[rgba(237,231,220,0.1)]">
            {datesEntries.map((entry, index) => (
              <div key={index} className="pt-6 space-y-3 first:pt-0">
                <div className="flex items-center justify-between">
                  <span className="font-body text-[11px] font-bold text-[#3FA2AD] tracking-[0.08em]">
                    {entry.period}
                  </span>
                  <span className="font-body text-[11px] text-[#6C7378]">
                    {entry.organization}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-[17px] font-semibold text-[#EDE7DC]">
                    {entry.role}
                  </h4>
                  <p className="font-body text-[13px] text-[#9EA5A8] pt-1.5 leading-relaxed">
                    {entry.summary}
                  </p>
                </div>
                <div className="pt-1 flex flex-wrap gap-1.5">
                  {entry.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-xs border border-[rgba(237,231,220,0.1)] font-body text-[10px] text-[#EDE7DC]/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
