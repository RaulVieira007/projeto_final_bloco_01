import { Tenis } from "../model/Tenis";

export class TenisController {
    private lista: Tenis[] = [];

    adicionar(tenis: Tenis): void {
        const existe = this.lista.some(t => t.getId() === tenis.getId());
        if (existe) {
            throw new Error(`Tênis com ID ${tenis.getId()} já existe!`);
        }
        this.lista.push(tenis);
    }

    listar(): Tenis[] {
        return this.lista;
    }

    deletar(id: number): void {
        const index = this.lista.findIndex(t => t.getId() === id);
        if (index === -1) {
            throw new Error(`Tênis com ID ${id} não encontrado.`);
        }
        this.lista.splice(index, 1);
    }

    atualizar(id: number, novoTenis: Tenis): void{
        const index = this.lista.findIndex(t => t.getId() === id );
        if (index === -1) {
            throw new Error(`Tênis com ID ${id} não encontrado.`);
        }
        this.lista[index] = novoTenis;
    }
}
