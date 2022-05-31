let a = 7;
let b = 12;

// criação de variavel temporária para troca de valores
// temp = a; // temp recebe o valor de a
// a = b; // a recebe o valor de b
// b = temp; // b recebe o valor de a

[a, b] = [b, a]; // a recebe o valor de b e b recebe o valor de a

console.log(a);
console.log(b);

