# Brief: incorporar o Atelier na Gaia como MÉTODO (não sistema)

Decisão do proprietário: "só o método mesmo, não é pra virar sistema".

## Origem (SOMENTE LEITURA — nada é alterado lá)
C:\Users\wp.santos\Documents\Overcore Studio
- docs/produto/design.md → 15 verbos, portões, lei do rastro: viram regra textual de skill/método.
- src/shared/studio/linhagem.ts e src/main/studio/atelier/linhagem.ts → contrato de linhagem traduzido em REGRA TEXTUAL (sem copiar código de app).
- croquis/manifesto.json e croquis/vigentes/ → referência do método (descrever, não copiar binários).
- CLAUDE.md do Studio → aponta o roster de artesãs em agent-skills-hub/agents/design/ (já em skills/atelier/contrato/ na branch). Ajustar Atelier+skills para coerência com o método do Studio.
NÃO trazer código Electron nem código de aplicação. Nenhum terceiro doador: se faltar algo, relatar.

## Alvo
C:\Users\wp.santos\Documents\Gaia, branch feat/atelier (HEAD 92dfd5a), PR #1 Weriton-DataOps/Gaia.
Retrabalhar: skills/atelier/* (SKILL.md + contrato/), docs/GAIA-ATELIER.md, CLAUDE.md, README.md, skills/gaia/SKILL.md.
Registrar origem explícita: caminhos dos arquivos do Overcore Studio usados; hub para o roster.

## Regra obrigatória, inequívoca, em CLAUDE.md + roteamento + skills
O Atelier fica incorporado na Gaia e TODO trabalho de design é obrigatoriamente passado ao Atelier — a Gaia passa o bastão. Sem comentário escondido.

## Restrições
- commit + push em feat/atelier (atualiza PR #1). NÃO merge na main.
- NÃO trocar conta do gh. Se o push falhar por autenticação, PARAR e registrar como pendente.
- Overcore Studio intocado.

## Relato obrigatório → docs/validacao/2026-09-12-relato-atelier-metodo.md
Saída literal de: git status; git log -3 --oneline; push; gh pr view 1; gh auth status.
Lista de arquivos criados/alterados. Separar provado de alegado. Pendências exatas.
