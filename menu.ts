import readlineSync from "readline-sync";

let opcao: number;

do {
    console.clear();

    console.log("*************************");
    console.log("*****Raridade nos Pé*****");
    console.log("*************************");
    
    console.log("*****Menu Principal*******");
    console.log("***1- Cadastrar Produto***");
    console.log("***2- Listar Produto******");
    console.log("***3- Alterar Produto*****");
    console.log("***4- Sair/Exit **********");

    opcao = readlineSync.questionInt("Escolha uma opção!");

    switch(opcao){
        case 1:
            console.log("Cadastrar Produto!");
            break;
        case 2:
            console.log("Listando Produtos!");
            break;
        case 3:
            console.log("Alterar Produto!");
            break;
        case 4:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida. Tente Novamente")
    }

    if (opcao !==4) readlineSync.question("\nPressione ENTER para continuar...");

}while(opcao !== 4)

export function sobre(): void{
    console.log("########################################");
    console.log("Projeto Desenvolvido por:               ");
    console.log(" Raul da Silva Vieira"                   );
    console.log("E-mail: raul.vieiras2001@gmail.com"      );
    console.log("GitHub: https://github.com/RaulVieira007");
    console.log("########################################");
}