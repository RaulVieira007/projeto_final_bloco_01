import { Produto } from "./Produto";

export class Tenis extends Produto {
    private marca: string
    private tamanho: number

    constructor(id: number, nome: string, preco: number, marca: string, tamanho: number) {
        super(id, nome, preco);
        this.marca = marca
        this.tamanho = tamanho
    }

    getMarca(): string {
        return this.marca
    }

    setMarca(marca: string): void {
        this.marca = marca;
    }

    getTamanho(): number {
        return this.tamanho;
    }

    setTamanho(tamanho: number): void {
        this.tamanho = tamanho;
    }


    mostrarDetalhes(): void {
        console.log(`ID: ${this.id} - Tênis ${this.nome} - Marca: ${this.marca} - Tamanho: ${this.tamanho} - Preço R$:${this.preco}`);
    }


}