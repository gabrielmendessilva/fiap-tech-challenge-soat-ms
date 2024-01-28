import ImagemProduto from "../../src/domain/entities/ImagemProduto";
import { ImagemProdutoInput } from "../../src/domain/entities/types/produtoType";

describe('ImagemProduto', () => {
    const imagemProdutoInput: ImagemProdutoInput = {
        id: "1",
        produtoId: "1",
        url: "https://example.com/image.jpg",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null
    };

    it('Testa a criação de uma imagem de produto com ID fornecido', () => {
        const imagemProduto = new ImagemProduto(imagemProdutoInput);

        expect(imagemProduto.id).toBe(imagemProdutoInput.id);
        expect(imagemProduto.produtoId).toBe(imagemProdutoInput.produtoId);
        expect(imagemProduto.url).toBe(imagemProdutoInput.url);
        expect(imagemProduto.createdAt).toBe(imagemProdutoInput.createdAt);
        expect(imagemProduto.deletedAt).toBe(imagemProdutoInput.deletedAt);
        expect(imagemProduto.updatedAt).toBe(imagemProdutoInput.updatedAt);
    });

    it('Testa a criação de uma imagem de produto sem ID fornecido', () => {
        const imagemProdutoInputWithoutId: ImagemProdutoInput = {
            produtoId: "1",
            url: "https://example.com/image.jpg",
            createdAt: new Date(),
            deletedAt: null,
            updatedAt: null,
            id: ''
        };

        const imagemProduto = new ImagemProduto(imagemProdutoInputWithoutId);

        expect(imagemProduto.id).toBeDefined();
        expect(imagemProduto.produtoId).toBe(imagemProdutoInputWithoutId.produtoId);
        expect(imagemProduto.url).toBe(imagemProdutoInputWithoutId.url);
        expect(imagemProduto.createdAt).toBe(imagemProdutoInputWithoutId.createdAt);
        expect(imagemProduto.deletedAt).toBe(imagemProdutoInputWithoutId.deletedAt);
        expect(imagemProduto.updatedAt).toBe(imagemProdutoInputWithoutId.updatedAt);
    });

    it('Testa a validação da criação de uma imagem de produto sem URL', () => {
        const imagemProdutoInputWithoutUrl: ImagemProdutoInput = {
            id: "1",
            produtoId: "1",
            url: "",
            createdAt: new Date(),
            deletedAt: null,
            updatedAt: null
        };

        expect(() => {
            new ImagemProduto(imagemProdutoInputWithoutUrl);
        }).toThrow();
    });
});