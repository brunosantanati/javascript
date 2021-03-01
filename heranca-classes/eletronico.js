class Eletronico {
    constructor(nome, voltagem, preco){
        this.nome = nome;
        this.voltagem = voltagem;
        this.preco = preco;
    }

    fazAlgoGenerico(){
        console.log('Fazendo algo genérico...');
    }

    mostrar(){
        console.log('O eletronico ' + this.nome + ' tem voltagem de ' 
            + this.voltagem + ' volts e custa ' + this.preco);
    }
}