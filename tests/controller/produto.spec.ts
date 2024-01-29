// produtoController.spec.ts
import { ProdutoController } from "../../src/interfaceAdapters/controllers/produtoController";
import ProdutoRepository from "~domain/repositories/produtoRepository";
import ProdutoUseCase from "~domain/useCases/produtoUseCase";
import { ProdutoDTO, ProdutoInput } from "~domain/entities/types/produtoType";
import { ImagemProdutoInput } from "../../src/domain/entities/types/produtoType";

const produtoRepositoryMock = jest.createMockFromModule<ProdutoRepository>(
    "~domain/repositories/produtoRepository"
);

jest.mock("~domain/useCases/produtoUseCase", () => ({
    adicionaImagens: jest.fn(),
    removeImagem: jest.fn(),
    criaProduto: jest.fn(),
    deletaProduto: jest.fn(),
    editaProduto: jest.fn(),
    listaProdutos: jest.fn(),
    retornaProduto: jest.fn(),
}));

describe("ProdutoController", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("deve remover uma imagem de um produto", async () => {
        const idProduto = "1";
        const idImagem = "2";

        (ProdutoUseCase.removeImagem as jest.Mock).mockResolvedValue(idProduto);

        const resultado = await ProdutoController.removeImagem(produtoRepositoryMock, idProduto, idImagem);

        expect(resultado).toEqual(idProduto);
        expect(ProdutoUseCase.removeImagem).toHaveBeenCalledWith(produtoRepositoryMock, idProduto, idImagem);
    });

    it("deve criar um produto", async () => {
        const produtoInput: ProdutoInput = {
            id: "1",
            nome: "mock_1",
            preco: 10,
            descricao: 'test',
            createdAt: new Date(),
            deletedAt: null,
            updatedAt: null
        };

        (ProdutoUseCase.criaProduto as jest.Mock).mockResolvedValue(produtoInput);

        const resultado = await ProdutoController.criaProduto(produtoRepositoryMock, produtoInput);

        expect(resultado).toEqual(produtoInput);
        expect(ProdutoUseCase.criaProduto).toHaveBeenCalledWith(produtoRepositoryMock, produtoInput);
    });

    it("deve deletar um produto", async () => {
        const idProduto = "1";

        (ProdutoUseCase.deletaProduto as jest.Mock).mockResolvedValue(1);

        const resultado = await ProdutoController.deletaProduto(produtoRepositoryMock, idProduto);

        expect(resultado).toBe(1);
        expect(ProdutoUseCase.deletaProduto).toHaveBeenCalledWith(produtoRepositoryMock, idProduto);
    });

    it("deve editar um produto", async () => {
        const idProduto = "1";
        const produtoInput: ProdutoInput = {
            id: "1",
            nome: "mock_1",
            preco: 10,
            descricao: 'test',
            createdAt: new Date(),
            deletedAt: null,
            updatedAt: null
        };

        (ProdutoUseCase.editaProduto as jest.Mock).mockResolvedValue(produtoInput);

        const resultado = await ProdutoController.editaProduto(produtoRepositoryMock, idProduto, produtoInput);

        expect(resultado).toEqual(produtoInput);
        expect(ProdutoUseCase.editaProduto).toHaveBeenCalledWith(produtoRepositoryMock, idProduto, produtoInput);
    });

    it("deve retornar um produto", async () => {
        const idProduto = "1";
        const produtoMock: ProdutoDTO = {
            id: "1",
            nome: "mock_1",
            preco: 10,
            descricao: 'test',
            createdAt: new Date(),
            deletedAt: null,
            updatedAt: null
        };

        (ProdutoUseCase.retornaProduto as jest.Mock).mockResolvedValue(produtoMock);

        const resultado = await ProdutoController.retornaProduto(produtoRepositoryMock, idProduto);

        expect(resultado).toEqual(produtoMock);
        expect(ProdutoUseCase.retornaProduto).toHaveBeenCalledWith(produtoRepositoryMock, idProduto);
    });
});