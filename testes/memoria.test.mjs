import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'

import { lembrar, lerMemoria, esquecer } from '../runtime/memoria.mjs'

test('a Gaia guarda, relembra, deduplica e esquece', async () => {
  const casa = await mkdtemp(join(tmpdir(), 'gaia-mem-'))
  try {
    const r = lembrar(casa, 'A Larissa cuida da Fazenda Boa Vista; prazo do CAR em novembro.')
    assert.equal(r.result, 'saved')

    const store = lerMemoria(casa)
    assert.equal(store.memories.length, 1)
    assert.match(store.memories[0].text, /Fazenda Boa Vista/)

    const dup = lembrar(casa, 'A Larissa cuida da Fazenda Boa Vista; prazo do CAR em novembro.')
    assert.equal(dup.result, 'duplicate')
    assert.equal(dup.total, 1)

    const rem = esquecer(casa, store.memories[0].id)
    assert.equal(rem.result, 'removed')
    assert.equal(lerMemoria(casa).memories.length, 0)
  } finally {
    await rm(casa, { recursive: true, force: true })
  }
})

test('memoria vazia e recusada', async () => {
  const casa = await mkdtemp(join(tmpdir(), 'gaia-vazia-'))
  try {
    assert.throws(() => lembrar(casa, '   '), /vazia|curta/i)
  } finally {
    await rm(casa, { recursive: true, force: true })
  }
})
