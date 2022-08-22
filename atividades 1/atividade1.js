

//1.  Faça um programa que entre com três números, faça a média aritmética e mostre o
//resultado. 


//ATIVIDADE 1

//let n1=30;
//let n2=20;
//let n3=25;
//const media= ((n1+n2+n3)/3)
//alert(`a média entre os números é ${media}`)


//2. Faça um programa que entre com o nome e o salário de um funcionário e mostre seu
//novo salário, sabendo que o mesmo teve um aumento de 10%. 

//let funcionario= 'Joao Marcos'
//let salario='2500'
//let aumento= (salario*10/100) + salario
//console.log('o funcionario'(funcionario), 'recebeu um aumento e seu salario é de' (aumento))

 //let nome = 'Joao Marcos'
 //let salario = 5000;
 //const novoSalario = salario*1.1;
 
 //alert(`o novo salario de ${nome} é ${novoSalario}`)

 //3. Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem
//ser somado os dois, caso contrário multiplique A por B ao final do cálculo ao final do
//cálculo atribuir o valor para uma variável C. 

//let A = 10
//let B = 30
//let resultado = null

//if(A==B) {
    //resultado= A + B

//} else {
    //resultado= A * B

//}

//let C = resultado


//ATIVIDADE 7

//Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: 
//ótimo: 3
 //bom: 2 
//regular: 1

//Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
//a média das idades das pessoas que responderam ótimo;
//a quantidade de pessoas que responderam regular;
//a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

let pesquisas = [1,2,3,2,1,3,3,2,1,2,3,2,1,2,2]
let idades = [20,21,33,22,18,32,31,23,19,25,36,22,19,22,28]
let totalIdadeOtimo = 0;
let respostaOtimo = 0;

    for (let i = 0; i < pesquisas.length; i++) {

    const pesquisa = pesquisas[i];
    if (pesquisas ==3) {
    totalIdadeOtimo += idades[i]
    respostaOtimo++
 }
}

const mediaOtimo = totalIdadeOtimo / respostaOtimo; 

alert(`a média de pessoas que responderam ótimo é:${mediaOtimo}`)



