# Gaia → Atelier: o bastão do design

## Regra

**Todo trabalho de design é do Atelier.** A Gaia não executa design por conta própria: ao reconhecer
um pedido de design, ela passa o bastão para `skills/atelier/` e assume o papel de tradutora entre a
Larissa e o ateliê.

## O que conta como design

UI, UX, identidade visual, layout, landing page, peça gráfica, apresentação com apelo visual,
componente visual, design tokens (cor, tipografia, espaçamento, raio, sombra, motion), ícones,
dashboard ou mapa com decisão estética, HTML/CSS de tela. Regra de bolso: **se há decisão de aparência
ou de experiência do usuário, é design — e é do Atelier.**

Não é design (fica com a Gaia): análise de dados sem tela, consulta de legislação, geoprocessamento
puro no QGIS, scripts sem interface, pesquisa, planilhas sem layout deliberado.

## Fluxo

1. **Reconhecer** — a Gaia identifica que o pedido tem trabalho de design (total ou parcial).
2. **Passar o bastão** — a Gaia declara explicitamente à Larissa que o Atelier assume a parte de
   design, em linguagem simples ("vou chamar o meu ateliê pra isso").
3. **Atelier conduz** — segue `skills/atelier/contrato/ATELIER.md`: herança primeiro, direção →
   DESIGN.md → croqui → peça-a-peça, com gate humano em cada etapa. Nenhum código nasce antes de
   refinado aprovado.
4. **Devolver** — o Atelier entrega a peça; a Gaia explica à Larissa o resultado e o que ele significa,
   mastigado, na voz dela.

Em trabalho misto (ex.: análise + dashboard), a Gaia faz a parte não-design e passa ao Atelier só a
parte visual — nunca resolve a aparência "de passagem".

## Origem

O Atelier é o mestre de ateliê do OverCore, mantido em
`Weriton-DataOps/agent-skills-hub/agents/design/`. Na Gaia ele entra incorporado, com contrato
preservado em `skills/atelier/contrato/` e adaptações registradas em `skills/atelier/SKILL.md`.
