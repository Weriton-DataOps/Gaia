# Gaia — estrutura e roteiro

A Gaia é a **costela do Omni**: herda a espinha (honestidade, memória, contexto), com alma própria e
domínio próprio. **Zero OverCore. Zero persona do Omni.**

## O que já existe (v0.1 — a alma)

```
.claude-plugin/
  plugin.json          — manifesto do plugin (name: gaia)
  marketplace.json     — marketplace gaia-hub
contratos/personalidade/
  manifest.json        — persona ativa: gaia-persona-v1
  gaia-persona-v1.md   — o coração: mentora botânica, carinhosa, honesta, didática
skills/gaia/SKILL.md   — o comando /gaia
CLAUDE.md              — contrato operacional e regras de ouro
README.md              — o que a Gaia é
```

## O que falta (v0.2 — o motor, próximo bloco)

Portar do Omni, **enxuto** — só o que faz a Gaia viver e aprender:

- **Memória persistente** — pra guardar o contexto do trabalho da Larissa (propriedades, prazos,
  preferências) e não fazê-la repetir. (do Omni: `runtime/memoria.mjs`, `contratos/memoria/`)
- **Engenharia de contexto** — selecionar e injetar a memória relevante a cada conversa.
  (do Omni: `runtime/contexto.mjs`, `runtime/recuperacao.mjs`, `contratos/contexto/`)
- **Injeção de personalidade** — o hook que mantém a Gaia sendo a Gaia a cada turno.
  (do Omni: `runtime/hook-contexto.mjs`, `runtime/personalidade.mjs`)
- **Operador** — o CLI enxuto (`gaia.ps1` → `runtime/cli.mjs`), só com as ações de memória e contexto.

**NÃO portar** (é o Omni avançado, overkill pra v1): failure-learning, self-improvement pipeline,
varredura diária, guardião, cockpit, auditoria, evals. Se um dia a Gaia precisar, a gente enxerta.

## Cuidado de engenharia

Ao portar o `cli.mjs`, cortar os imports dos módulos que não vêm — senão a Gaia importa um braço que
foi deixado pra trás e quebra na largada. O motor tem que ser internamente consistente, não um
Frankenstein de peças faltando.
