$ErrorActionPreference = 'Stop'
$raiz = Split-Path -Parent $PSScriptRoot
$cli = Join-Path $raiz 'runtime/gaia.mjs'
node $cli @args
if ($LASTEXITCODE -ne 0) { throw "O operador da Gaia falhou com codigo $LASTEXITCODE." }
