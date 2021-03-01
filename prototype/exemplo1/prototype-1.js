// Exemplo baseado nesse vídeo: 
// https://www.youtube.com/watch?v=4jb4AYEyhRc&list=PLGemgmMsjljQWdy9-BQnMPQzrysRRpQ7E&index=2

function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    /*this.login = function(){
        console.log(this.email, 'has logged in');
    }*/
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariocorp.com', 'Yoshi');

console.log(userOne);
userOne.login();
console.log(userOne);
userOne.logout();

console.log(userTwo);
userTwo.login();
userTwo.logout();