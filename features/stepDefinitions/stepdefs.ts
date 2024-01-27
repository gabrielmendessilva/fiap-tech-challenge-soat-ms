// eslint-disable-next-line unused-imports/no-unused-imports
import { Given, Then, When } from "@cucumber/cucumber";
import assert from "assert";
import dotenv from "dotenv";

dotenv.config();
const url_endpoint = "http://localhost:3000/api";

let response: any;
let categoriaId: string;
let produtoId: string;

//////////////////////// Cria uma categoria
Given("que o sistema esta ok", function () {
  return true;
});

When("enviar uma requisicao para a api de criacao", async function () {
  response = await fetch(`${url_endpoint}/categoria`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: "bdd_test",
    }),
  });
});

Then("deve retornar a categoria criada", async function () {
  const respBody = await response.json();
  categoriaId = respBody?.message?.id;
  assert.equal(respBody?.message?.nome, "bdd_test");
});


//////////////////////// Lista as Categoria
Given("que existe pelo menos uma categoria criada", function () {
  assert.equal(categoriaId?.length > 0, true);
});

When("enviar uma requisicao para buscar a lista", async function () {
  response = await fetch(`${url_endpoint}/categoria`);
});

Then("deve retornar a lista de categorias", async function () {
  const respBody = await response.json();
  const temCategorias = respBody.categorias.length > 0;
  assert.equal(temCategorias, true);
});

//////////////////////// Busca uma categoria
When("enviar uma requisicao para buscar a categoria", async function () {
  response = await fetch(`${url_endpoint}/categoria/${categoriaId}`);
});

Then("deve retornar a categoria", async function () {
  const respBody = await response.json();
  assert.equal(respBody.categoria.id, categoriaId);
});

//////////////////////// Edita uma categoria
When("enviar uma requisicao para modificar a categoria", async function () {
  response = await fetch(`${url_endpoint}/categoria/${categoriaId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: "categoria_modificada",
    }),
  });
});

Then("deve retornar a categorias modificada", async function () {
  const respBody = await response.json();
  assert.equal(respBody?.message?.nome, "categoria_modificada");
});

//////////////////////// Deleta uma categoria
When("enviar uma requisicao para deletar a categoria", async function () {
  response = await fetch(`${url_endpoint}/categoria/${categoriaId}`, {
    method: "DELETE",
  });
});

Then("deve deletar com sucesso a categoria", async function () {
  const respBody = await response.json();
  assert.equal(respBody?.status, "success");
});

// FEATURE PRODUTO

//////////////////////// Cria um produto
Given("que exista categoria criada", async function () {
  assert.equal(categoriaId?.length > 0, true);
  response = await fetch(`${url_endpoint}/categoria`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: "bdd_test",
    }),
  });
  const body = await response.json();
  categoriaId = body.message.id;
  assert.equal(categoriaId?.length > 0,true);
});
When("enviar um requisicao para a api de criacao do produto", async function () {
  response = await fetch(`${url_endpoint}/produto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: "produto_bdd",
      preco: 1,
      descricao: "string",
      categoriaId,
      imagens: [
        {
          url: "test.png"
        }
      ]
    }),
  });
});

Then("deve retornar o produto criado", async function () {
  const respBody = await response.json();
  produtoId = respBody?.message?.id;
  assert.equal(respBody?.message?.nome, "produto_bdd");
});


//////////////////////// Lista os Produtos
Given("que existe pelo menos um produto criado", function () {
  assert.equal(produtoId?.length > 0, true);
});

When("enviar um requisicao para buscar a lista de produtos", async function () {
  response = await fetch(`${url_endpoint}/produto`);
});

Then("deve retornar a lista de produtos", async function () {
  const respBody = await response.json();
  const temProdutos = respBody.produtos.length > 0;
  assert.equal(temProdutos, true);
});

//////////////////////// Busca uma produto
When("enviar um requisicao para buscar a produto", async function () {
  response = await fetch(`${url_endpoint}/produto/${produtoId}`);
});

Then("deve retornar a produto", async function () {
  const respBody = await response.json();
  assert.equal(respBody.produto.id, produtoId);
});

//////////////////////// Edita um produto
When("enviar um requisicao para modificar a produto", async function () {
  response = await fetch(`${url_endpoint}/produto/${produtoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: "produto_modificado",
      preco: 2,
      descricao: 'test',
      categoriaId
    }),
  });
});

Then("deve retornar a produtos modificada", async function () {
  const respBody = await response.json();
  assert.equal(respBody?.message?.nome, "produto_modificado");
});

//////////////////////// Deleta um produto
When("enviar um requisicao para deletar a produto", async function () {
  response = await fetch(`${url_endpoint}/produto/${produtoId}`, {
    method: "DELETE",
  });
});

Then("deve deletar com sucesso a produto", async function () {
  const respBody = await response.json();
  assert.equal(respBody?.status, "success");
});

Then("o status da api deve ser {int}", function (status) {
  assert.equal(response.status, status);
});