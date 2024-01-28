
import Categoria from "../../src/domain/entities/categoria";
import { CategoriaInput } from "../../src/domain/entities/types/CategoriaType";

describe("categoria", () => {
    it("deve criar uma nova instância de categoria", () => {
        const categoria: CategoriaInput = {
            id: "1234-1234-1234",
            nome: "categoria teste unitario",
            createdAt: new Date(),
        };

        const categoriaNew = new Categoria(categoria);

        expect(categoriaNew.id).toBeDefined();
        expect(categoriaNew.nome).toBe(categoria.nome);
    });

    it('deve gerar um _id', () => {
        const categoria: CategoriaInput = {
            id: "432423-543654-3242343",
            nome: "categoria teste unitario novo teste",
            createdAt: new Date(),
        };

        const categoriaNew = new Categoria(categoria);

        expect(categoriaNew.id).toBeDefined();
        expect(typeof categoriaNew.id).toBe("string");
    });
});
