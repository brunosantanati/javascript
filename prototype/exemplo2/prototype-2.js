// Exemplo baseado no link:
// https://www.youtube.com/watch?v=CpmE5twq1h0&list=PLGemgmMsjljQWdy9-BQnMPQzrysRRpQ7E&index=4

// constructor function
function Animal() {
    this.nome = "Animal genérico";
    this.nomeCientifico = "Nome científico genérico";
    this.numeroPatas = 4;
}

// constructor function
function Gato() {
    Animal.call(this);
    this.nome = "Gato";
    this.nomeCientifico = "Felis catus";
    this.gostaDe = "Brincar com bolinha";
}

Animal.prototype.fazerBarulho = function() {
    console.log('Animal fazendo barulho');
}

Animal.prototype.comer = function() {
    console.log('Comendo...');
}

Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

Gato.prototype.fazerBarulho = function() {
    console.log('Miau Miau!!');
}

a = new Animal();
g = new Gato();

console.log(a);
console.log(g);

a.fazerBarulho();
a.comer();

g.fazerBarulho();
g.comer();