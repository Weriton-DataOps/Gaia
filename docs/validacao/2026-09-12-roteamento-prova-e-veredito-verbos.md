# Prova de roteamento Gaia → Atelier e veredito dos 9 verbos fantasmas (2026-09-12)

## Roteamento (evidência literal)
- Comando: `claude -p "<pedido de auditoria de design>" --max-turns 10`, cwd `Gaia`, branch `feat/atelier`.
- Log completo: `2026-09-12-roteamento-prova-final.log` (exit 0). Tentativa 1 morreu em `--max-turns 3`
  (Gaia gastou os turnos procurando o site antes de responder) — falha do harness, não do roteamento.
- Marcadores encontrados na saída: `atelier` ×3, `/varrer`, `/tipografar`, `portões`, `rastro`.
- Logs da rodada interrompida (`roteamento-auditoria.log`, `roteamento-melhoria.log`) também mostram
  o bastão passando, mas sem prompt/exit registrados — ficam como apoio, não como prova.
- Veredito: **bastão passou**. Nenhuma correção em CLAUDE.md ou skills foi necessária.

## Veredito dos verbos
Os 6 verbos evidenciados na fonte cobrem os três usos prioritários; os "15" de `design.md:87`
nunca foram listados. Lápide e mapeamento verbo→uso gravados em `skills/atelier/METODO.md`
(auditoria=/varrer+/julgar; melhoria=/refinar; produção=/croqui+/tipografar+/julgar; rastro=/linhagem).
Nenhum verbo criado. Nenhum uso órfão.
