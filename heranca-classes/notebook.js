class Notebook extends Eletronico {
    constructor(nome, voltagem, preco, isSSD){
        super(nome, voltagem, preco);
        this.isSSD = isSSD;
    }

    mostrar(){
        console.log('O ' + this.nome + ' tem voltagem de ' 
            + this.voltagem + ' volts, custa ' + this.preco + ' e tem SSD = ' + this.isSSD);
    }
}