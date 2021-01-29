// console.log('Exercicio de Introdução ao JS:');
// var nome = 'Vítor Ribeiro';
// var idade = 19;
// var idade2 = 11;
// var frase = 'Olá Mundo';
// console.log('Nome: ' + nome + ' tem: ' + idade + ' anos');
// console.log(idade + idade2);
// console.log(frase.replace('Olá', 'Hello'));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());

// console.log('Exercicio de Arrays e Dicionários:');
// //Arrays e Dicionários
// var lista = ['maçã', 'banana', 'uva'];
// console.log(lista.push('pêra'));
// console.log(lista.pop());
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(' - '));

// var fruta = { nome: 'Maçã', cor: 'Vermelha' };
// console.log(fruta);

// var listaFruta = [
//   { nome: 'Maçã', cor: 'Vermelha' },
//   { nome: 'Uva', cor: 'Roxa' },
// ];
// console.log(listaFruta);
// idade = prompt('Qual a sua idade?');
// if (idade > 18) alert('Maior de idade');
// else alert('Menor de idade');

// var count = 0;
// while (count < 5) {
//   alert('If: ' + count);
//   count++;
// }

// var count2;
// for (count = 0; count <= 5; count++) alert(count);

// var d = new Date();
// alert(d.getDay());
// alert(d.getHours());
// alert(d.getMinutes());

function soma(n1, n2) {
  return n1 + n2;
}
function setReplace(frase, nome, novoNome) {
  return frase.replace(nome, novoNome);
}
var validar;
function validaIdade(idade) {
  // var validar;
  if (idade >= 18) validar = true;
  else validar = false;
  return validar;
}
var idade = prompt('Qual a sua idade?');
console.log(validaIdade(idade));
alert(soma(5, 10));
alert(setReplace('Vai Japão', 'Japão', 'Brasil'));
