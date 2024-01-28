
import { ProdutoDTO } from '../../src/domain/entities/types/produtoType';

describe('Produto Model', () => {
    it('Criar um novo produto', async () => {
        const produto: ProdutoDTO = {
            id: "1234-1234-1234",
            nome: "Produto teste unitario",
            categoriaId: "10",
            preco: 10,
            descricao: "teste unitario",
            createdAt: new Date(),
            deletedAt: null,
            updatedAt: null,
        };

        expect(produto.nome).toBe('Produto teste unitario');
    })
});
