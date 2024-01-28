
import Produto from "../../src/domain/entities/produto";
import { ProdutoDTO } from "../../src/domain/entities/types/produtoType";

describe("categoria", () => {
    it("deve criar uma nova instância de categoria", () => {
        const produto: ProdutoDTO = {
            id: "1234-1234-1234",
            nome: "categoria teste unitario",
            preco: 10,
            createdAt: new Date(),
            descricao: "teste unitario",
            deletedAt: null,
            updatedAt: null
        };

        const produtoNew = new Produto(produto);

        expect(produtoNew.id).toBeDefined();
        expect(produtoNew.nome).toBe(produto.nome);
    });

    it('deve gerar um _id', () => {
        const produto: ProdutoDTO = {
            id: "432423-543654-3242343",
            nome: "categoria teste unitario",
            preco: 10,
            createdAt: new Date(),
            descricao: "teste unitario",
            deletedAt: null,
            updatedAt: null
        };

        const produtoNew = new Produto(produto);

        expect(produtoNew.id).toBeDefined();
        expect(typeof produtoNew.id).toBe("string");
    });
});
