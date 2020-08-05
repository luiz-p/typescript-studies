const objetoA: {
  readonly chaveA: string // para não ser possível alterar a chaveA
  chaveB: string
  chaveC?: string

  /* para quando não souber qual a chave vai ser criada
  se for receber algo de uma api desconhecida por exemplo */
  [key: string]: unknown
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
}

objetoA.chaveB = 'Outro valor'
objetoA.chaveC = 'Novo valor'
objetoA.chave42 = 'Nova chave' // [key: string]: unknown

console.log(objetoA)
