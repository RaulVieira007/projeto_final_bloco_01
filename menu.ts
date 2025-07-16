import readlineSync from "readline-sync";
import { Tenis } from "./src/model/Tenis";
import { TenisController } from "./src/controller/TenisController";
import { colors } from "./src/util/Colors";

const controller = new TenisController;

let opcao: number;


do {
    console.clear();

    console.log(colors.bg.black, colors.fg.yellow,"*************************");
    console.log(colors.bg.black, colors.fg.yellow,"*****Raridade nos Pé*****");
    console.log(colors.bg.black, colors.fg.yellow,"*************************");
    console.log(colors.bg.black, colors.fg.yellow,"*****Menu Principal*******");
    console.log(colors.bg.black, colors.fg.yellow,"***1- Cadastrar Produto***");
    console.log(colors.bg.black, colors.fg.yellow,"***2- Listar Produtos******");
    console.log(colors.bg.black, colors.fg.yellow,"***3- Alterar Produto*****");
    console.log(colors.bg.black, colors.fg.yellow,"***4- Sair/Exit **********");

    opcao = readlineSync.questionInt("Escolha uma opção!");

    switch(opcao){
        case 1:
            console.log("Cadastrar Produto!");

            const id = readlineSync.questionInt("ID: ");
            const nome = readlineSync.question("Nome: ");
            const preco = readlineSync.questionFloat("Preço: ");
            const marca = readlineSync.question("Marca: ");
            const tamanho = readlineSync.questionInt("Tamanho: ");

            const novoTenis = new Tenis(id, nome, preco, marca, tamanho);
            
            try{
                controller.adicionar(novoTenis);
                console.log("\nProduto cadastrado com sucesso!");
            }catch(Error) {
                console.log("\nErro ao cadastrar" + (Error));
            }
            break;
        case 2:
            console.log("Listando Produtos!");

            const lista = controller.listar();

            if(lista.length === 0){
                console.log("Nenhum Tênis cadastrado..");
            }else{
                lista.forEach(t => t.mostrarDetalhes());
            }
            break;
        case 3:
            console.log("Alterar Produto!");
            const idAtualizar = readlineSync.questionInt("Informe o ID do tênis para deletar")

            const tenisExiste = controller.listar().find(t => t.getId() === idAtualizar);

            if(!tenisExiste) {
                console.log(`Nenhum tênis com ID ${idAtualizar} Foi encontrado.`);
                break;
            }

            const novoNome = readlineSync.question("Novo nome:");
            const novoPreco = readlineSync.questionFloat("Novo Preço:");
            const novoMarca = readlineSync.question("Nova Marca:");
            const novoTamanho = readlineSync.questionInt("Novo Tamanho:");

            const tenisAtualizado = new Tenis(idAtualizar, novoNome, novoPreco, novoMarca, novoTamanho);

            try {
                controller.atualizar(idAtualizar, tenisAtualizado);
                console.log("Produto Atualizado");
            }catch (Error) {
                console.log("Erro ao Atualizar: " + (Error));
            }
            break;
        case 4:
            console.log("Saindo...");
            sobre();
            break;
        default:
            console.log("Opção inválida. Tente Novamente")
    }

    if (opcao !==4) 
        readlineSync.question("\nPressione ENTER para continuar...");

}while(opcao !== 4)

export function sobre(): void{
    console.log(colors.bg.black, colors.fg.yellow,"########################################");
    console.log(colors.bg.black, colors.fg.yellow,"Projeto Desenvolvido por:               ");
    console.log(colors.bg.black, colors.fg.yellow," Raul da Silva Vieira"                   );
    console.log(colors.bg.black, colors.fg.yellow,"E-mail: raul.vieiras2001@gmail.com"      );
    console.log(colors.bg.black, colors.fg.yellow,"GitHub: https://github.com/RaulVieira007");
    console.log(colors.bg.black, colors.fg.yellow,"########################################");
}