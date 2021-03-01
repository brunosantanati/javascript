// Exemplo baseado no link:
// https://www.youtube.com/watch?v=MfxBfRD0FVU&list=PLGemgmMsjljQWdy9-BQnMPQzrysRRpQ7E&index=1

let e = new Eletronico('microondas', '120', 3500);
console.log(e);
e.mostrar();
e.fazAlgoGenerico();

let n = new Notebook('notebook', '120', 3500, true);
console.log(n);
n.mostrar();
n.fazAlgoGenerico();