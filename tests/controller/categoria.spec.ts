// categoriaController.spec.ts
import { CategoriaController } from "../../src/interfaceAdapters/controllers/categoriaController";
import CategoriaRepository from "~domain/repositories/categoriaRepository";
import CategoriaUseCase from "~domain/useCases/categoriaUseCase";
import { CategoriaInput } from "~domain/entities/types/CategoriaType";

// Criamos um mock para a categoriaRepository
const categoriaRepositoryMock = jest.createMockFromModule<CategoriaRepository>(
    "~domain/repositories/categoriaRepository"
);

// Criamos mocks para as funções dentro de CategoriaUseCase
jest.mock("~domain/useCases/categoriaUseCase", () => ({
    criaCategoria: jest.fn(),
    deletaCategoria: jest.fn(),
    editaCategoria: jest.fn(),
    listaCategorias: jest.fn(),
    retornaCategoria: jest.fn(),
}));

describe("CategoriaController", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("deve criar uma categoria", async () => {
        const categoriaInput: CategoriaInput = {
            id: "1",
            nome: "categoria_mock_1"
        };

        (CategoriaUseCase.criaCategoria as jest.Mock).mockResolvedValue(categoriaInput);

        const resultado = await CategoriaController.criarCategoria(categoriaRepositoryMock, categoriaInput);

        expect(resultado).toEqual(categoriaInput);
        expect(CategoriaUseCase.criaCategoria).toHaveBeenCalledWith(categoriaRepositoryMock, categoriaInput);
    });

    it("deve deletar uma categoria", async () => {
        const categoriaId = "1";

        (CategoriaUseCase.deletaCategoria as jest.Mock).mockResolvedValue(1);

        const resultado = await CategoriaController.deletaCategoria(categoriaRepositoryMock, categoriaId);

        expect(resultado).toBe(1);
        expect(CategoriaUseCase.deletaCategoria).toHaveBeenCalledWith(categoriaRepositoryMock, categoriaId);
    });

    it("deve editar uma categoria", async () => {
        const categoriaId = "1";
        const categoriaInput: CategoriaInput = {
            id: "1",
            nome: "categoria_mock_1"
        };

        (CategoriaUseCase.editaCategoria as jest.Mock).mockResolvedValue(categoriaInput);

        const resultado = await CategoriaController.editaCategoria(categoriaRepositoryMock, categoriaId, categoriaInput);

        expect(resultado).toEqual(categoriaInput);
        expect(CategoriaUseCase.editaCategoria).toHaveBeenCalledWith(categoriaRepositoryMock, categoriaId, categoriaInput);
    });

    it("deve retornar uma categoria", async () => {
        const categoriaId = "1";
        const categoriaMock: CategoriaInput = {
            id: "1",
            nome: "categoria_mock_1"
        };;

        (CategoriaUseCase.retornaCategoria as jest.Mock).mockResolvedValue(categoriaMock);

        const resultado = await CategoriaController.retornaCategoria(categoriaRepositoryMock, categoriaId);

        expect(resultado).toEqual(categoriaMock);
        expect(CategoriaUseCase.retornaCategoria).toHaveBeenCalledWith(categoriaRepositoryMock, categoriaId);
    });
});