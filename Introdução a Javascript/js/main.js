console.log('Exercicio de Introdução ao JS:');
var nome = 'Vítor Ribeiro';
var idade = 19;
var idade2 = 11;
var frase = 'Olá Mundo';
console.log('Nome: ' + nome + ' tem: ' + idade + ' anos');
console.log(idade + idade2);
console.log(frase.replace('Olá', 'Hello'));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

console.log('Exercicio de Arrays e Dicionários:');
//Arrays e Dicionários
var lista = ['maçã', 'banana', 'uva'];
console.log(lista.push('pêra'));
console.log(lista.pop());
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(' - '));

var fruta = { nome: 'Maçã', cor: 'Vermelha' };
console.log(fruta);

var listaFruta = [
  { nome: 'Maçã', cor: 'Vermelha' },
  { nome: 'Uva', cor: 'Roxa' },
];
console.log(listaFruta);
