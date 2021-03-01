// Exemplo baseado no link:
// https://medium.com/@mandeepkaur1/object-literal-vs-constructor-in-javascript-df143296b816

// literal notation
const Website = {
    'url': 'https://github.com/brunosantanati/',
    'printUrl': function() {
        console.log(this.url);
    }
};

Website.printUrl();

// constructor function
function Site() {
    this.url = 'https://github.com/brunosantanati/javascript/';
    this.printUrl = function() {
        console.log(this.url);
    };
}

const s = new Site();
s.printUrl();