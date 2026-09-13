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
