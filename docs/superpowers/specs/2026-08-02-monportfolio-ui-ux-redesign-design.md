# Design Spec · Reposicionamento UI/UX do portfolio monPortfolio

- **Data:** 2026-08-02
- **Projeto:** monPortfolio
- **Tema:** avaliação e redirecionamento de UI/UX para um portfolio profissional de engenharia, consultoria e marca pessoal
- **Status:** aprovado em nível de direção

## 1. Contexto

O projeto atual é um portfolio em Next.js com linguagem visual dark/cyberpunk, forte presença de efeitos visuais, widgets experimentais e blocos interativos. A implementação atual comunica repertório técnico e gosto por experimentação, mas a ordem da mensagem está invertida: antes de apresentar valor profissional, o site apresenta efeitos, ambientes e recursos visuais.

O objetivo desta iniciativa é corrigir essa ordem de percepção. A home deve deixar de parecer uma vitrine de features e passar a funcionar como uma narrativa de valor. A experiência precisa comunicar, nos primeiros segundos, que Matheus Diniz Gruber é um profissional técnico forte, confiável, estratégico e capaz de entregar software, arquitetura e soluções com IA aplicada.

## 2. Objetivos de negócio e comunicação

A home precisa atender simultaneamente três objetivos:

1. **Apoiar contratação para vagas**
2. **Gerar confiança para consultoria/freelance**
3. **Fortalecer marca pessoal técnica**

A prioridade não será escolher um único objetivo, e sim equilibrar os três. A primeira dobra deve ser entendida rapidamente por recrutadores, mas também precisa convencer tech leads e founders de que existe profundidade técnica e capacidade de execução.

## 3. Público principal

O público prioritário é uma combinação de:

- **tech leads / engineering managers**
- **founders / clientes de consultoria**

Como público secundário, a home também deve permanecer legível para:

- **recrutadores generalistas**

Isso implica uma interface que seja rápida de escanear, mas suficientemente robusta para sustentar leitura mais técnica em blocos posteriores.

## 4. Leitura de design aprovada

A direção aprovada é **Technical Premium**.

Definição prática:

- dark premium contido
- menos cyberpunk, menos “gamer”, menos demo
- mais autoridade visual, mais legibilidade, mais hierarquia
- técnica expressa por conteúdo, casos e clareza, não por excesso de efeito

A estética não precisa preservar a aparência atual. Tudo pode mudar desde que o resultado mantenha profissionalismo e mostre valor real.

## 5. Diagnóstico do problema atual

### 5.1 Problema central

A home atual comunica primeiro “experimento visual/técnico” e só depois “portfolio profissional”. Isso reduz clareza, aumenta ruído cognitivo e enfraquece a conversão.

### 5.2 Causa estrutural

A estrutura atual tenta apresentar muitos blocos de alto protagonismo em sequência:

- hero com muitos estímulos
- partículas e cursor customizado
- terminal interativo
- playground
- widgets de status
- várias seções com peso semelhante

Sem uma hierarquia forte, o visitante precisa descobrir sozinho o que é principal e o que é acessório.

### 5.3 Consequências

- recrutadores podem perceber o site como interessante, porém pouco objetivo
- founders podem não entender rapidamente a oferta de valor
- a marca pessoal parece mais centrada em estilo/exploração do que em impacto
- componentes experimentais competem com os cases e com o posicionamento principal

## 6. Princípio orientador

A home será redesenhada da lógica de **vitrine de recursos** para a lógica de **narrativa de valor**.

Nova ordem de mensagem:

**posicionamento claro → cases com impacto → prova técnica → credenciais → contato**

Terminal, playground e widgets continuam possíveis, mas deixam de ser protagonistas. Eles passam a sustentar autoridade técnica em papel secundário.

## 7. Arquitetura da home aprovada

A home deve ter 6 blocos principais, cada um com uma função clara.

### 7.1 Hero de posicionamento

Objetivo: explicar quem é o profissional, o que ele entrega e por que vale continuar lendo.

Deve conter apenas:

- headline clara
- subtítulo curto
- um CTA principal
- um CTA secundário

Não deve conter:

- excesso de badges
- nuvem de tecnologias já na primeira dobra
- terminal grande
- múltiplos blocos concorrendo com o headline

### 7.2 Cases em destaque

Objetivo: converter credibilidade em prova.

Cada case deve responder rapidamente:

- contexto
- problema ou oportunidade
- papel do Matheus
- stack relevante
- resultado / impacto

A seção de cases é o centro da home. Ela deve receber mais atenção do que terminal, playground e widgets.

### 7.3 Prova técnica

Objetivo: mostrar profundidade sem virar inventário.

Em vez de listar tudo, o bloco deve organizar a autoridade em poucos eixos como:

- backend e sistemas confiáveis
- arquitetura e integrações
- IA aplicada / automação
- linguagens, runtimes e experimentação relevante

Esse bloco comprova capacidade. Ele não substitui os cases.

### 7.4 Credenciais e trajetória

Objetivo: consolidar confiança.

Pode incluir, de forma enxuta:

- formação
- certificações
- recortes de experiência
- evidências institucionais, quando úteis

A leitura deve ser rápida. Não deve parecer currículo bruto colado na página.

### 7.5 Laboratório / experiments

Objetivo: preservar personalidade técnica sem atrapalhar a conversão principal.

Conteúdos como terminal, Harpia, playground e widgets devem ser tratados de um destes modos:

- seção compacta abaixo da dobra
- bloco resumido com CTA para aprofundamento
- página dedicada, como `/lab`

A recomendação preferencial é mover o maior volume experimental para uma superfície secundária.

### 7.6 Contato / CTA final

Objetivo: capturar intenção ao fim da leitura.

A seção final deve falar com dois cenários:

- contratação
- projeto/consultoria

A ação precisa ser simples, direta e visível.

## 8. Estratégia de componentes atuais

### 8.1 Manter, mas refatorar profundamente

- `src/components/HeroSection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/ProjectGrid.tsx`
- `src/components/TechStackSection.tsx`
- `src/components/CareerTimeline.tsx`
- `src/components/CertificationsSection.tsx`
- `src/components/CyberFooter.tsx`

Esses blocos mantêm valor temático, mas precisam perder ruído, ganhar hierarquia e se alinhar à nova narrativa.

### 8.2 Reduzir protagonismo ou mover de lugar

- `src/components/OpenClaudeTerminal.tsx`
- `src/components/HarpiaPlayground.tsx`
- `src/components/SystemStatusWidget.tsx`

Esses componentes têm valor de marca pessoal técnica, mas hoje roubam atenção da conversão principal. Devem ir para uma posição de apoio ou para rota secundária.

### 8.3 Remover da home ou tornar discretos

- `src/components/CyberCursor.tsx`
- `src/components/ParticleCanvas.tsx`
- excesso de utilitários glow e visual sci-fi em `src/app/globals.css`

A manutenção desses elementos na home principal tende a reduzir sensação de senioridade, clareza e sofisticação. Se algum efeito sobreviver, deve ser muito discreto e justificável.

### 8.4 Simplificar composição da página

O arquivo `src/app/page.tsx` deve deixar de empilhar muitos blocos de mesma importância. A página precisa ganhar prioridade narrativa e menos competição entre seções.

## 9. Direção visual aprovada

### 9.1 Linguagem visual

- dark premium contido
- sem neon dominante
- sem gradientes chamativos como recurso principal
- espaçamento mais generoso
- mais silêncio visual
- mais contraste de hierarquia do que contraste de efeito

### 9.2 Cor

- uma cor de acento principal
- neutros consistentes
- evitar múltiplos acentos simultâneos competindo entre si

### 9.3 Tipografia

- headline forte e limpo
- subtítulos curtos
- melhor legibilidade geral
- menos aparência de dashboard/painel sci-fi

### 9.4 Motion

Motion só deve existir quando reforçar:

- hierarquia
- feedback
- elegância
- transição de leitura

Motion não deve existir para provar capacidade de animação.

## 10. Princípios de UX

1. **Um foco por dobra**
2. **CTA principal claro**
3. **Escaneabilidade imediata**
4. **Menos surpresa visual, mais previsibilidade boa**
5. **Cases como prova principal**
6. **Elementos experimentais como apoio, nunca como centro**

## 11. Escopo da avaliação UI/UX

A avaliação formal deve produzir diagnóstico e recomendações nestes eixos:

### 11.1 Posicionamento

- headline
- subtítulo
- clareza de oferta
- alinhamento com contratação, consultoria e marca pessoal

### 11.2 Hierarquia visual

- ordem das seções
- peso dos elementos
- competição entre CTAs
- distrações frente aos elementos principais

### 11.3 Qualidade visual

- palette
- tipografia
- espaçamento
- consistência de cards, bordas, sombras e ícones

### 11.4 UX e conversão

- escaneabilidade
- navegação
- compreensão dos projetos
- facilidade de contato
- redução de esforço cognitivo

### 11.5 Profissionalismo percebido

- o que parece demo/efeito
- o que deve parecer produto/autoridade
- o que precisa sair da home ou perder protagonismo

### 11.6 Plano de correção

- manter
- simplificar
- mover
- redesenhar do zero

## 12. Entregáveis esperados da avaliação

A avaliação deve gerar:

1. diagnóstico do estado atual
2. lista priorizada de problemas
3. proposta final de arquitetura da home
4. direção visual aprovada
5. mapa de componentes: manter / refatorar / remover / mover

## 13. Restrições e não-objetivos

### 13.1 Restrições

- o site deve continuar parecendo técnico
- a home deve funcionar para vaga, consultoria e marca pessoal ao mesmo tempo
- o design não pode cair em visual genérico de template de SaaS

### 13.2 Não-objetivos

- não transformar a home em showcase de efeitos
- não preservar componentes atuais só por apego
- não usar a home como inventário completo de tudo o que foi construído

## 14. Critérios de sucesso

O redesign será bem-sucedido se, ao abrir a home:

1. um recrutador entender em segundos quem é o profissional e o tipo de valor que ele entrega
2. um founder enxergar capacidade real para consultoria e execução
3. um público técnico perceber profundidade sem sentir excesso de ruído
4. os cases parecerem mais importantes que os efeitos
5. a home parecer mais produto profissional do que demo experimental

## 15. Próximo passo

Após revisão final deste spec, o próximo passo é escrever um plano de implementação com etapas objetivas para:

- redefinir a arquitetura da home
- refatorar ou mover componentes atuais
- estabelecer nova direção visual
- implementar a nova hierarquia de conteúdo e conversão
