// Exemplo baseado no link:
// https://stackoverflow.com/questions/49708355/what-is-the-difference-between-constructor-functions-and-classes

function Thing (name) {
    this.name = name;
    this.doSomething = function (){};
    alert("A new thing was created.");
}

var x = new Thing();
console.log(x);

class Something {
    constructor(name) {
        this.name = name;
        alert("Something was created.");
    }
    doSomething() {}
}

var y = new Something();
console.log(y);