
import { CategoriaInput } from '../../src/domain/entities/types/CategoriaType';

describe('Categoria Model', () => {
    it('Criar uma nova categoria', async () => {
        const categoria: CategoriaInput = {
            id: "1234-1234-1234",
            nome: "categoria teste unitario",
            createdAt: new Date(),
        };

        expect(categoria.nome).toBe('categoria teste unitario');
    })
});
