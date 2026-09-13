# O método do Atelier — transplantado do Overcore Studio

Este arquivo é **regra de skill**, não código. Nada de Electron, nada de app: só o método que o
Studio mediu em produção. A Gaia **passa o bastão** de todo design ao Atelier (regra 6 do CLAUDE.md,
`skills/gaia/SKILL.md`, `skills/atelier/SKILL.md`); o Atelier trabalha assim:

## Origem (somente leitura — nada foi alterado lá)
- `C:\Users\wp.santos\Documents\Overcore Studio\docs\produto\design.md` → as quatro leis, o método
  medido, os dois portões, a lei do rastro.
- `...\Overcore Studio\src\shared\studio\linhagem.ts` e `src\main\studio\atelier\linhagem.ts` →
  contrato de linhagem, traduzido abaixo em regra textual.
- `...\Overcore Studio\croquis\manifesto.json` e `croquis\vigentes\` → referência de como se
  cataloga croqui (status só com prova). Descritos, não copiados.
- Roster de artesãs: `agent-skills-hub/agents/design/` → já em `skills/atelier/contrato/`.

## 1. Duas classes de trabalho, custos diferentes
| classe | o que é | custo medido no Studio |
|---|---|---|
| **Layout** | onde as coisas ficam | 1–2 rodadas |
| **Matéria / movimento** | como brilha, pesa, se move | 11–32 rodadas |

Layout segue direto. As regras 2–5 valem para **matéria**.

## 2. Referência antes do primeiro pixel
Peça de matéria começa com **moodboard de referências reais** (5–6 modelos), nunca com palpite.
Buscar custa uma busca; adivinhar custou cinco rodadas.

## 3. Tira de graus, nunca peça solta
Matéria vai em **variantes lado a lado** (cinco graus), escolhidas **por número**. Quem aprova
resolve apontando, não descrevendo.

## 4. Versão preservada, sempre
Arquivo por versão (`peca-v1.html`, `peca-v2.html`…). Sobrescrever é proibido: voltar duas versões
tem que custar zero rodadas.

## 5. Movimento não se julga por print
Animação/transição sai em variantes **rodando** lado a lado.

## Os portões (gates humanos)
O gate real é o olho de quem aprova. Ficam **dois portões obrigatórios**:
1. **Croqui aprovado** — antes de refinar.
2. **Refinado aprovado** — antes de entregar.
Os verbos existem e aparecem, mas não são cerimônia: não se pede "digite /refinar"; a pessoa fala
"monta o croqui" e o Atelier registra o verbo que rodou.

## Verbos do Atelier
O Studio fala em "15 verbos" (`docs/produto/design.md:87`), mas **a lista de 15 não existe em lugar
nenhum da fonte** — só a menção com reticências. Busca feita em 2026-09-12 (somente leitura):
`design.md`, `src/**/*.ts`, `docs/**/*.md`, `src/main/studio/atelier/*`, `src/renderer`, e o
contrato do hub em `contrato/ATELIER.md`. Verbos **evidenciados literalmente** na origem:

| verbo | onde aparece | o que faz no Atelier |
|---|---|---|
| `/croqui` | design.md:87,105; atelier.ts | primeira forma da peça; abre o portão 1 |
| `/refinar` | design.md:87,105; atelier.ts | matéria/movimento em tira de graus; abre o portão 2 |
| `/varrer` | design.md:87; src | varredura das quatro leis, gera o placar |
| `/tipografar` | design.md:105 | escala e ritmo de tipo |
| `/julgar` | src/main/studio/atelier | veredito da versão (rascunho/em-revisao/aprovado/descartado) |
| `/linhagem` | linhagem.ts (9 ocorrências) | árvore de versões, procedência, palco |

Os outros nove **não foram localizados e não foram inventados**. Enquanto o Studio não publicar a
lista, o Atelier da Gaia opera com estes seis e registra no rastro qualquer verbo novo que rodar
(o design.md manda exatamente isso: o verbo tem que aparecer, não ser digitado).

## A lei do rastro (o trabalho tem que aparecer)
Toda peça entregue vem com o **rastro do trabalho**, visível:
- **verbo** que rodou;
- **artesã** convocada (do roster em `contrato/`) e por quê;
- **skills** que entraram (pelo nome) e as **recusadas** por risco, ditas;
- **modelo** que fez cada etapa (croqui / refinado / juízo);
- **placar das leis**: quantas regras foram varridas, de quantas, por quem, quando.
A peça nunca afirma o que não foi verificado. Trabalho invisível é indistinguível de trabalho que
não aconteceu.

## Contrato de linhagem (tradução textual de `linhagem.ts`)
Cada **versão** de uma peça registra: id, projeto, página, número da versão, arquivo, nota,
**veredito** (`rascunho` | `em-revisao` | `aprovado` | `descartado`), motivo do veredito,
**procedência** (de onde veio: nova, derivada de qual versão, recuperada), quando, autor e o
**rastro do trabalho** acima. As versões de uma página formam uma **árvore**: cada linha sabe seu
nível, se abre galho, se está "no palco" (a vigente) e se está viva. Versão sem ligação é listada à
parte, nunca escondida. Na Gaia isso vive como texto/markdown junto das peças — não como banco.

## Catálogo de croquis (como o manifesto do Studio)
Status **só com prova**: `vigente` (em força), `aprovado-em-outro-escopo`, `substituido` (linhagem
pelo nome), `exploracao` (nenhuma decisão encontrada). Raiz única: `vigentes/ historico/
exploracoes/ assets/`.
