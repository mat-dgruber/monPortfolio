---
version: 2.1.0
name: Dark Record-Label Portal & Archive (60/30/10 Teal & Amber)
colors:
  bg: "#0A0C0E"
  bg-secondary: "#101317"
  ink: "#EDE7DC"
  ink-secondary: "#9EA5A8"
  muted: "#6C7378"
  teal-primary: "#3FA2AD"
  teal-deep: "#2E6B72"
  amber-accent: "#E8913C"
  hairline: "rgba(237, 231, 220, 0.13)"
  hairline-strong: "rgba(237, 231, 220, 0.25)"
color-distribution:
  ground-base-60: "#0A0C0E / #101317 com texto em osso #EDE7DC"
  accent-primary-30: "#3FA2AD (Teal) para códigos de release, tags técnicas, links e períodos"
  accent-focal-10: "#E8913C (Amber) para pontos focais de alto contraste e indicadores ativos"
typography:
  display-wordmark:
    fontFamily: "'Syne', sans-serif"
    fontWeight: "800"
    letterSpacing: "-0.03em"
  heading-hero:
    fontFamily: "'Syne', sans-serif"
    fontWeight: "700"
    letterSpacing: "-0.025em"
  heading-display:
    fontFamily: "'Syne', sans-serif"
    fontWeight: "600"
    letterSpacing: "-0.02em"
  label-caps:
    fontFamily: "'Sora', sans-serif"
    fontSize: "11px"
    fontWeight: "600"
    letterSpacing: "0.14em"
    textTransform: "uppercase"
  body-default:
    fontFamily: "'Sora', sans-serif"
    fontSize: "15px"
    fontWeight: "400"
    lineHeight: "1.6"
  body-small:
    fontFamily: "'Sora', sans-serif"
    fontSize: "12px"
    fontWeight: "400"
    lineHeight: "1.5"
rounded:
  none: "0px"
  xs: "2px"
  sm: "4px"
  pill: "9999px"
components:
  nav:
    height: "58px"
    background: "rgba(10, 12, 14, 0.85)"
    backdropBlur: "20px"
    border: "1px solid {colors.hairline}"
    shape: "pill"
  pill-button:
    background: "{colors.ink}"
    color: "{colors.bg}"
    fontFamily: "{typography.label-caps.fontFamily}"
    fontSize: "11px"
    letterSpacing: "0.12em"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
  deck-card:
    background: "{colors.bg-secondary}"
    border: "1px solid {colors.hairline}"
    boxShadow: "0 32px 64px -16px rgba(0, 0, 0, 0.85)"
    aspectRatio: "1 / 1"
---

# Design Specification: Dark Record-Label Portal (Regra 60/30/10)

## Overview
Arquitetura visual de **Matheus Gruber**, estruturada com a **Regra 60/30/10**:
- **60% (Base & Fundo)**: Carvão profundo (`#0A0C0E`), painéis `#101317` e tipografia osso quente (`#EDE7DC` / `#9EA5A8`).
- **30% (Acento Primário - Teal/Azulado `#3FA2AD` / `#2E6B72`)**: Utilizado em códigos de release, tags técnicas, hover states da navegação, períodos da linha do tempo e linhas estruturais de apoio.
- **10% (Ponto Focal - Âmbar/Laranja `#E8913C`)**: Reservado para o ponto focal de alto contraste — dots de destaque, badges de status ativo no deck e ênfase na frase do manifesto.

## Regras Rígidas de Estilo
- **Acentos restritos a tipografia, dots ou linhas de 1px**: Nunca preenchimento de fundo em blocos grandes.
- **Intercâmbio Harmônico**: Alternância equilibrada entre Teal e Âmbar ao longo da página, conferindo ritmo visual cinematográfico.
