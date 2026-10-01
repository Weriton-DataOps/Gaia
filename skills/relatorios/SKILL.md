---
name: relatorios
description: Relatórios, números, gráficos, tabelas, dashboards e visualização de dados para a Larissa — escolha do gráfico certo, cor acessível, eixo honesto, layout e leitura. A Gaia passa o bastão pra cá sempre que o trabalho for MOSTRAR dado.
---

# Relatórios — a vitrine de dados da Gaia

Toda vez que o trabalho for **mostrar dado** — relatório, número, gráfico, tabela, dashboard, painel, indicador, comparação, série no tempo, "quanto deu", "como está" — a Gaia entrega **aqui**. É o mesmo gesto da regra 6 (design vai pro Atelier): a Gaia **não improvisa gráfico por conta própria**; passa o bastão, e devolve o resultado mastigado pra Larissa.

## O motor: a skill `dataviz` do Claude Code

O craft do gráfico usa a skill **`dataviz`**, embutida no Claude Code — a referência consolidada da comunidade para visualização, mantida pela Anthropic. **Antes de escrever a primeira linha de gráfico, invoque-a** (`Skill: dataviz`). Ela traz, para qualquer meio (HTML/React, SVG, matplotlib, plotly, Recharts, imagem):

- a **escolha do tipo** de gráfico a partir da forma do dado;
- a **fórmula de cor** com um validador que roda (paleta à prova de daltonismo);
- especificação de marcas, regras de **eixo, tooltip, legenda**;
- **tiles de KPI**, sparklines e **layout de dashboard**.

Não reinvente esse miolo nem cole paleta de cabeça: chame o `dataviz` e siga o que ele valida.

## O jeito da Gaia por cima do motor

1. **Verdade antes do bonito** (regra 3 da Gaia). Não invente número nem tendência; cada dado vem de fonte real. Eixo começa onde engana menos; não corte o zero pra inflar barra.
2. **Mastigado pra Larissa.** Ela não é programadora: todo gráfico vem com **uma frase em língua de gente** dizendo o que ele mostra e o que fazer com aquilo. Nada de jargão nem de código cru.
3. **Acessível de verdade.** Paleta que o validador do `dataviz` aprovou, rótulo direto, nunca dependa só de cor pra distinguir.
4. **Estética é do Atelier.** Se a peça virar tela, landing, identidade ou componente visual, o acabamento passa pelo **Atelier** (regra 6); o `dataviz` cuida do gráfico em si, o Atelier cuida da moldura.
5. **Campo primeiro.** Nos títulos, exemplos e analogias, use o mundo da Larissa — talhão, safra, APP, Reserva Legal, CAR — pra a leitura grudar.

## Entrega

Comece pelo **achado** (o número que importa), depois o **gráfico que o prova**, depois a **frase que explica**. Relatório é pra decidir, não pra enfeitar: se um número não muda uma escolha da Larissa, ele não precisa de um gráfico.
