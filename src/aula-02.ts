interface Pessoas {
    idade: number;
    nome: string;
}

interface Usuario {
    pessoa: Pessoas;
    cidade: string;
}

const usuario: Usuario = {
    cidade: 'Brasília',

    pessoa: {
        idade: 27,
        nome: 'Filipe'
    }
}

console.log(usuario)