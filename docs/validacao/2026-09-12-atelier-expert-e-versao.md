# 2026-09-12 — Atelier como agente expert, versão 0.3.0 e verificação de atualização

## Feito (provado por diff neste commit)
- `skills/atelier/METODO.md`: seção de verbos reescrita com origem por verbo. **Os 15 não existem
  como lista na fonte** (`design.md:87` só diz "15 verbos (/croqui, /refinar, /varrer…)"). Buscados em
  `design.md`, `src/**/*.ts`, `docs/**/*.md`, `src/main/studio/atelier/`, `src/renderer`, `contrato/ATELIER.md`.
  Evidenciados: `/croqui /refinar /varrer /tipografar /julgar /linhagem` (6). Nove faltam; não inventados.
- `skills/atelier/SKILL.md`: papel de agente expert, roster (contrato do hub), portões, rastro, critérios, roteamento.
- `skills/gaia/SKILL.md`: seção "Roteamento (inequívoco)". `CLAUDE.md` regra 6 já cobria.
- `package.json` 0.2.4 → 0.3.0; `CHANGELOG.md` criado.
- `scripts/verificar-atualizacao.ps1` + seção no README. Só fetch; nunca pull/reset.

## Saídas literais
### Teste do script (feat/atelier, antes do push)
```
[Gaia] versao local 0.3.0 (325e815) | origin/feat/atelier 0.2.4 (325e815)
[Gaia] Atualizada.
exit=0
```
Nota: sem `-ExecutionPolicy Bypass` o Windows bloqueia (política de scripts); README documenta.

### Teste de roteamento (inspeção do índice — não foi rodado `claude -p`, orçamento)
```
grep -c -i atelier: CLAUDE.md=5 skills/gaia/SKILL.md=4 skills/atelier/SKILL.md=10
skills/gaia/SKILL.md:135: **Todo trabalho de design → Atelier**
CLAUDE.md:20: 6. **Design é do Atelier — sempre.**
```

### gh auth status antes
```
  ✓ Logged in to github.com account GR-Estrategia (keyring)
  - Active account: true
  ✓ Logged in to github.com account Weriton-DataOps (keyring)
  - Active account: false
```
(git log / push / pr view: ver seção final, preenchida após o push)
