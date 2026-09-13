# Validação — Atelier na `main` (2026-09-12)

Executado pelo Omni em nome de Weriton. Tudo abaixo é saída literal, salvo onde marcado como alegação.

## 1. PR #1 antes do merge
```
{"baseRefName":"main","headRefOid":"7aaaf3035341a9ffa653e3f89640e6f390aeda25","mergeable":"MERGEABLE","mergedAt":null,"state":"OPEN"}
```

## 2. Merge (conta Weriton-DataOps, restaurada GR-Estrategia)
`gh auth status` antes: `Weriton-DataOps ... Active account: true`.
`gh pr merge 1 --merge` → `merge exit=0`.
`gh auth status` depois: `GR-Estrategia ... Active account: true`.

PR depois:
```
{"baseRefName":"main","headRefOid":"7aaaf3035341a9ffa653e3f89640e6f390aeda25","mergeCommit":{"oid":"b389c7838ce39b2d6a7e17c093700e287565c81b"},"mergedAt":"2026-09-13T01:59:55Z","state":"MERGED"}
```

## 3. `main` local (`git pull --ff-only`, fast-forward)
```
b389c78 Merge pull request #1 from Weriton-DataOps/feat/atelier
7aaaf30 docs(atelier): prova de roteamento headless e lápide dos 9 verbos fantasmas
1a0d5ee feat: Atelier como agente expert em design, Gaia 0.3.0 e verificação de atualização
```
Presentes: `skills/atelier/SKILL.md`, `skills/atelier/METODO.md`, `scripts/verificar-atualizacao.ps1`, `CHANGELOG.md` linha 3 `## 0.3.0 — 2026-09-12`.

## 4. verificar-atualizacao.ps1
```
[Gaia] versao local 0.3.0 (b389c78) | origin/main 0.3.0 (b389c78)
[Gaia] Atualizada.
script exit=0
```

## 5. Fumaça `claude -p` na `main` (modelo claude-sonnet-5, --max-turns 10)
Rodada 1 (texto): exit=0. Trecho:
```
**Boas notícias:** o contraste do texto branco sobre o azul (#2563EB) dá cerca de **5,2:1** — passa da régua mínima de acessibilidade (4,5:1), então quem enxerga com dificuldade consegue ler. O espaçamento (8x16) também está em passos "redondos", sem números aleatórios — coerente.

**O problema real: falta o estado de foco.** Pense assim: quando alguém navega pelo site usando só o teclado (tecla Tab) ou usa leitor de tela, o "estado de foco" é como um holofote que mostra onde a pessoa está agora. Sem ele, o botão fica mudo — a pessoa aperta Tab, o foco pula pro botão, e ninguém vê nada acontecer na tela. Ela se perde. Isso não é só estética: é uma trava de acessibilidade (a lei internacional WCAG exige foco visível).

**Melhoria proposta:** adicionar um contorno visível (anel) de 2px, numa cor de destaque com contraste forte, com uma pequena folga de 2px em
```
Rodada 2 (`--output-format stream-json --verbose`): exit=0. Ferramentas chamadas:
```
1 Bash | 4 Read | 1 Skill | 1 omni
"skill":"atelier"
```
Os Read subsequentes trazem `/varrer`, `/refinar`, `/julgar` (SKILL/METODO do Atelier). Prova: a Gaia invocou a skill `atelier` e leu o método antes de responder.

## Não provado / alegação
- Não foi verificado se o Atelier aplicou literalmente cada portão de `/julgar`; a saída final não nomeia os verbos (`-p` só imprime a mensagem final).
- Overcore Studio não foi tocado (nenhum comando o referenciou).

---

## 6. Retomada — passada real de `/varrer` + `/julgar` (2026-09-12, noite)

Estado conferido antes: `main` local e `origin/main` em `38bd59e`, árvore limpa, PR #1 `MERGED`. Nada repetido.

`verificar-atualizacao.ps1` (nova execução):
```
[Gaia] versao local 0.3.0 (38bd59e) | origin/main 0.3.0 (38bd59e)
[Gaia] Atualizada.
exit=0
```

### Achado: verbo no início do prompt quebra
`claude -p "/julgar ..."` → `Unknown command: /julgar`, `num_turns=0`. Os verbos do Atelier são vocabulário da skill, não slash commands do harness. **Uso correto: verbo dentro da frase** ("Atelier, rode /varrer e depois /julgar na peça ...").

### Rodada válida (`--max-turns 12`, claude-sonnet-5, stream-json)
exit=0, `num_turns=8`, custo 0,307 USD. Ferramentas: 2 Bash, 5 Read. Arquivos lidos:
`skills/atelier/{SKILL.md, METODO.md, contrato/ATELIER.md, contrato/AUDITORIA.md}` e
`Overcore Studio/docs/produto/design.md` (somente leitura). Sem chamada `Skill` explícita nesta rodada; o roteamento veio pelo prompt de sistema da Gaia + leitura direta.

Saída literal:
```
## Rastro
- **Verbo:** `/varrer` → `/julgar` (peça: botão primário — bg `#2563EB`, texto branco 14px/500, padding 8x16, raio 6px, sem foco/hover)
- **Artesã convocada:** nenhuma. Varredura é função do mestre-artesão, não se terceiriza. Titulares de Etapa 5 do contrato (`baseline-ui`, `fixing-accessibility`) foram **recusados**: não existem no hub local da Gaia (sem `skills_index.json` — vai direto ao improviso, e aqui nem improviso coube, o teste é textual).
- **Skills:** nenhuma carregada. `anti-slop-review` (catálogo da sessão) fica de fora por escopo — ela pontua A1-A30, o pedido foi as quatro leis de `design.md`.
- **Modelo:** Sonnet 5 fez a varredura e o juízo. Sem conflito de gosto que justificasse Opus.

## Placar das quatro leis (`design.md`, Overcore Studio — fonte única, só leitura)
1. **Sem brilho / profundidade** — PASSA por ausência: fill sólido, zero gradiente, zero glow. Ressalva: também zero sombra — não há profundidade nenhuma construída, só a ausência do defeito.
2. **Transparência contida** — PASSA: opacidade não declarada em lugar nenhum, corpo 100% opaco.
3. **Textura obrigatória** — **FALHA**: fill plano sem ruído, veia ou relevo. É exatamente o "lê como renderizado, não como existente" que a lei descreve.
4. **Densidade baixa** — PASSA: peça única, nada a subtrair.

**Placar: 3/4 PASSA, 1 FALHA (lei 3), 1 ressalva (lei 1).**

## Portão 1 — croqui aprovado
**AGUARDA-HUMANO.** Evidência: a peça chegou como valor final (hex, px, raio) — pulou o esboço tosco da Etapa 3. Nenhuma aprovação de croqui está registrada nesta conversa.

## Portão 2 — refinado aprovado
**FALHOU.** Evidência objetiva, antes de qualquer olho humano: o checklist de estados da Etapa 5 (hover/focus/empty/loading/error) reprova de cara — o próprio pedido admite "sem estado de foco nem hover". Foco ausente não é estilo, é falha de acessibilidade (WCAG 2.4.7, teclado cego). Some à lei 3 acima: dois achados bloqueantes.

## Veredito
**em-revisão.** Não é rascunho (já tem valores finais, não esboço) nem aprovado (dois achados concretos: textura zero, foco/hover ausentes) — falta corrigir e voltar pro portão 2; o portão 1 nem foi aberto por você ainda.
```

Portões, como reportados pelo agente: **Portão 1 = AGUARDA-HUMANO** (peça chegou com valores finais, croqui não aprovado); **Portão 2 = FALHOU** (sem foco/hover; lei 3 textura). Veredito **em-revisão**. Coerente com `METODO.md` (gates humanos inegociáveis) — em headless o portão humano só pode ficar aguardando, não passar.

### Decisão sobre os 9 verbos fantasmas
Registrada em `skills/atelier/METODO.md:61` ("Lápide dos nove verbos fantasmas"): **removidos por inexistência** — `design.md:87` fala em "15 verbos" e para nas reticências; nenhuma lista existe na fonte. Conjunto vigente: `/croqui`, `/refinar`, `/varrer`, `/tipografar`, `/julgar`, `/linhagem`. Prova complementar em `docs/validacao/2026-09-12-roteamento-prova-e-veredito-verbos.md`.
