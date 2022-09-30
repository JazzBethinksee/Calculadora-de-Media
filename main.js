function Calcular() {

    //Converte para valor numérico
    var notab1 = parseFloat(document.getElementById("bimestre1").value);
    var notab2 = parseFloat(document.getElementById("bimestre2").value);
    var notab4 = parseFloat(document.getElementById("bimestre4").value);
    var notab3 = parseFloat(document.getElementById("bimestre3").value);

    //Cálculo de Média
    var notaFinal = (notab1 + notab2 + notab3 + notab4)/4
    
    //Fixação de casas decimais
    var notaF = notaFinal.toFixed(1);

    //Condicional de Aprovação
    if (notaF >= 6) {
        var resultado = "Aprovado!";
    } else {
        var resultado = "Reprovado!";
    }

    //Teste de Console
    console.log(notaF + " > " + resultado);

    //Retorno para usuário
    document.getElementById("mediaFinal").innerHTML = ("A sua Média Final é: " + notaF);
    document.getElementById("resultado").innerHTML = ("Resultado: " + resultado);
}
function Limpar() {
    document.getElementById("bimestre1").value="";
    document.getElementById("bimestre2").value="";
    document.getElementById("bimestre3").value="";
    document.getElementById("bimestre4").value="";
    document.getElementById("mediaFinal").value="";
    document.getElementById("resultado").value="";
}




/* Resumo Aula 
var notaBimestre1 = 5.87;
var notaBimestre2 = 7.67;
var notaBimestre3 = 6.8;
var notaBimestre4 = 8.7;
var media = 6;

var notaFinal = (notaBimestre1 + notaBimestre2 + notaBimestre3 + notaBimestre4)/4;

var notaFixada = notaFinal.toFixed(1); // Arredondamento de nota para 1 casa decimal

if (notaFixada >= media) {
    var resultado = "Aprovado!";
} else {
    var resultado = "Reprovado!";
}

console.log("Bem vindo, "+nomeAluno+"!"); // Concatenação é a junção de uma string (texto) com uma variável
console.log("Sua Nota Final é: "+notaFixada);
console.log("Você foi: "+resultado);

console.log("Essa é a string com o cálculo inteiro no comando do console: "+((notaBimestre1 + notaBimestre2 + notaBimestre3 + notaBimestre4)/4).toFixed(1));

// Conversor de Temperatura: Fahrenheit para Celsius

var celsius = 100;
var fahrenheit = (celsius*(9/5))+32;

console.log("A temperatura em Celsius é: "+celsius+" e sua equivalente em Fahrenheit é: "+fahrenheit);
*/