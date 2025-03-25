// Define uma interface 'Pessoa' para especificar a estrutura de um objeto pessoa
interface Pessoa {
    idade: number; // Idade da pessoa
    nome: string; // Nome da pessoa
    isMaiorIdade: boolean; // Indica se a pessoa é maior de idade (true/false)
    teste: any; // Uma propriedade com tipo flexível (não é recomendado usar 'any' na maioria dos casos)
    
}

// Cria um objeto 'pessoa' que segue a interface 'Pessoa'
const pessoa: Pessoa = {
    idade: 27, // Atribui a idade
    nome: 'Filipe', // Atribui o nome
    isMaiorIdade: true, // Especifica se a pessoa é maior de idade
    teste: 465 // Atribui um valor à propriedade 'teste'
};


// Exibe o objeto 'pessoa' no console
console.log(pessoa);