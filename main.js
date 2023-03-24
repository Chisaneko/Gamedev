
//var month = prompt("Em que mês estamos?");

var month = parseInt(prompt("Which month we are"));

switch(month){

    case 1:
        console.log("Estamos em Janeiro");
        break;
    
    case 2:
        console.log("Estamos em Fevereiro");
        break;

    case 3:
        console.log("Estamos em Março");
        break;
    

    default:
        console.log("Mês não reconhecido");
        break;
}