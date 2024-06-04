// // Primitivos no js
// // String, Number, Undefined, Null, Boolean, Symbol

// // String
// var nome = "Yan";
// var sobrenome = "Yan";

// nome === sobrenome; // true
// console.log(nome);

// // Number
// var idade = 20;
// console.log(idade);

// // Undefined
// var x;
// console.log(x);

// // Null
// var y = null;
// console.log(y);

// // Boolean
// var a = true;
// var b = false;
// console.log(a, b);

// // Symbol
// var simbolo1 = Symbol("foo");
// var simbolo2 = Symbol("foo");
// console.log(simbolo1);

// simbolo1 === simbolo2; // false

// // não primitivos
// // Object, Array, Function

// // Object
// var objeto = {
//   nome: "Yan",
//   idade: 20,
// };

function pegarSobrenome(nome) {
  console.log(nome);
}

var objeto1 = {
  nome: "Yan",
  idade: 20,
  name2: this.name,
  pegarNome: function () {
    console.log(this.nome);
  },
  pegarSobrenome: pegarSobrenome("fran"),
  logarNome: console.log("entrou aqui"),
};

objeto1.pegarSobrenome("yan"); // yan

// console.log(objeto.idade); // 20

// objeto === objeto1; // false

// // Array
// var array = [0, 2, 5, 6, 3];

// console.log(array[3]);

// function

// Parametros de função são variáveis que são acessadas apenas dentro da própria função
// function getName(name, sobrenome) {
//   console.log(name, sobrenome);
// }

// getName("Yan", "César");
