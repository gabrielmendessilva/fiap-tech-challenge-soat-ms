// import express from "express";
// import supertest from "supertest";
// import { v4 as uuidv4 } from "uuid";

// import { ProdutoController } from "../../src/interfaceAdapters/controllers/produtoController";

// const app = express();
// app.use(express.json());
// const server = app.listen(4000);

// afterAll(() => {
//     server.close()
// })

// const createdAt = new Date();

// const produtoMock = {
//     id: uuidv4(),
//     nome: "QR Code",
//     preco: 10,
//     descricao: 'test',
//     createdAt,
//     deletedAt: null,
//     updatedAt: null
// };

// const listaProdutoMock = [
//     {
//         _id: uuidv4(),
//         nome: "QR Code",
//         preco: 10,
//         descricao: 'test',
//         createdAt,
//         deletedAt: null,
//         updatedAt: null
//     },
// ];

// describe("GET em /api/produto", () => {
//     it("Deve listar os produtos", async () => {
//         ProdutoController.listaProdutos = jest
//             .fn()
//             .mockResolvedValue(listaProdutoMock);

//         await supertest(server)
//             .get("/api/produto")
//             .expect(200)
//             .then((response) => {
//                 expect(response.body.message[0].nome).toBe("QR Code");
//             });
//     });
//     it("Deve receber 404 quando produto não encontrado", async () => {
//         ProdutoController.retornaProduto = jest
//             .fn()
//             .mockResolvedValue([]);

//         await supertest(server)
//             .get("/api/produto/1234-1234-1234-1222")
//             .expect(404)
//             ;
//     });
// });
