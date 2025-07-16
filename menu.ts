import readlineSync from "readline-sync";
import { Tenis } from "./src/model/Tenis";

// const tenis1 = new Tenis(1, "Air Max 90", 599.99, "Nike", 42);
// const tenis2 = new Tenis(2, "Minuzo Wave", 429.99, "Mizuno", 39);
let listaTenis: Tenis[] = [];

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

            const id = readlineSync.questionInt("ID: ");
            const nome = readlineSync.question("Nome: ");
            const preco = readlineSync.questionInt("Preço: ");
            const marca = readlineSync.question("Marca: ");
            const tamanho = readlineSync.questionInt("Tamanho: ");

            const novoTenis = new Tenis(id, nome, preco, marca, tamanho);
            listaTenis.push(novoTenis);

            console.log("\nProduto Cadastrado com sucesso!");
            break;
        case 2:
            console.log("Listando Produtos!");

            if(listaTenis.length === 0){
                console.log("Nenhum Tênis cadastrado.");
            }else{
                listaTenis.forEach((Tenis) => Tenis.mostrarDetalhes());
            }
            
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

    if (opcao !==4) 
        readlineSync.question("\nPressione ENTER para continuar...");

}while(opcao !== 4)

export function sobre(): void{
    console.log("########################################");
    console.log("Projeto Desenvolvido por:               ");
    console.log(" Raul da Silva Vieira"                   );
    console.log("E-mail: raul.vieiras2001@gmail.com"      );
    console.log("GitHub: https://github.com/RaulVieira007");
    console.log("########################################");
}