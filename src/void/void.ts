function semRetorno(...args: string[]): void {
  console.log(args.join(' '))
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Pires',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome)
  },
}

semRetorno('Luiz', 'Pires')
pessoa.exibirNome()

export { pessoa }
