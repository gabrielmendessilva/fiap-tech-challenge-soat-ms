# Tech Challenge - Pós-Tech SOAT - FIAP

Este é o projeto desenvolvido durante a fase I e atualizado durante a fase IV do curso de pós-graduação em arquitetura de software da FIAP - turma II/2023.

Membros do grupo 30:
Diórgenes Eugênio da Silveira - RM 349116
Elton de Andrade Rodrigues - RM 349353
Gabriel Mendes - RM 348989
Juliana Amoasei dos Reis - RM 348666


### Changelog Fase IV:

* **Microsserviço de produtos**: separação da funcionalidade de produtos e categorias de produtos em um microsserviço isolado;
* **Migração de banco de dados**: separação de base de dados exclusiva do serviço de pagamentos, utilizando MySQL/RDS;
* **Implementação de testes**: Testes unitários e de integração com cobertura de 80%; testes BDD com cucumber.js;
* **Qualidade de código**: proteção da branch `main`, integração de código via PR e implementação de tarefas de CI para testes via GitHub Actions;
* **Deploy automatizado**: implementação de tarefas de CI para deploy automatizado das atualizações via GitHub Actions.

## Propósito do projeto

Fornecer um sistema para gerenciamento de pedidos para uma empresa do ramo de serviços de alimentação.

## Stack utilizada

* Node.js v20
* TypeScript 
* MySQL/Sequelize
* Express
* Docker
* AWS
  * RDS
  * ECS

## Instalação do projeto

Este projeto está pronto para ser executado em um ambiente Docker. Por este motivo, será necessária apenas a instalação do Docker e/ou Kubernetes, não sendo necessária a instalação manual do projeto. Também não será necessária a instalação manual do banco de dados (MySQL).

Caso não tenha o Docker instalado, siga as instruções para seu sistema operacional na [documentação oficial do Docker](https://docs.docker.com/get-docker/).

Para executar em ambiente de desenvolvimento:

* Faça o `fork` e `clone` este repositório em seu computador;
* Entre no diretório local onde o repositório foi clonado;
* Execute o código utilizando o Docker.

### Docker Compose

Utilize o comando `docker build app` e `docker compose up app` para subir o servidor local, expondo a porta 3000 em localhost. Além do container da api também subirá o serviço db com o banco de dados de desenvolvimento.

Para derrubar o serviço, execute o comando `docker compose down`.

## Utilizacao

### Endpoints

Esta API fornece documentação no padrão OpenAPI.
Os endpoints disponíveis, suas descrições e dados necessários para requisição podem ser consultados e testados em ```/api-docs```.

`GET /produto?categoriaId={categoriaId}`
pega lista de todos os produtos recebendo o ID da categoria via query string.
`GET /produto/:id`
pega um produto específico pelo ID
`POST /produto`
cria um novo produto
`PUT /produto/:id`
atualiza os dados de um produto pelo ID
`DELETE /produto/:id`
exclui um produto da base de dados pelo ID
`POST /produto/:idProduto/imagens`
adiciona uma string de endereço de imagem de produto
`DELETE /produto/:idProduto/imagem/:idImagem`
exclui uma string de endereço de imagem de produtos

`GET /categoria`
pega a lista de todas as categorias cadastradas
`GET /categoria/:id`
pega uma categoria específica pelo ID
`POST /categoria`
cria uma nova categoria
`PUT /categoria/:id`
atualiza os dados de uma categoria pelo ID
`DELETE /categoria/:id`
exclui uma categoria existente pelo ID

### 1. Cadastrar Produtos

1.1 O projeto já cria as principais categorias(Lanche, Acompanhamento, Bebida, Sobremesa);

1.2 - Cadastro do produto:
```json
{
  "nome": "produto 1",
  "preco": 0.1,
  "descricao": "demo 1",
  "categoriaId": "1c941831-c8cb-43a3-8d3f-2959a6fb7241",
  "imagens": [
    {
      "url": "demo.png"
    }
  ]
}
```

## Desenvolvimento do projeto

### Diagramas

- Separação dos serviços

![diagrama dos serviços da aplicação](docs/Tech_Challenge_-_Arquitetura.drawio.png)


### Estrutura do Projeto

O projeto foi reestruturado seguindo o padrão do clean architecture. 

- `datasources`:  comunicação dos serviços externos como banco de dados e checkout;
- `domain`:  contém a camada de domínio da aplicação com suas entidades, casos de uso e repositórios;
- `interfaceAdapters`: camada de interface do clean architecture com o controlador;
- `presenters`: camada externa de comunicacao externa onde se entra a API;

```shell
.
├── src
│   ├── datasources
│   │   └── database
│   │       ├── config
│   │       │   └── interfaces
│   │       ├── models
│   │       ├── repository
│   │       └── seeders
│   ├── domain
│   │   ├── entities
│   │   │   ├── types
│   │   │   └── valueObjects
│   │   ├── repositories
│   │   └── useCases
│   ├── interfaceAdapters
│   │   └── controllers
│   └── presenters
│       └── api
│           ├── config
│           │   └── interfaces
│           └── routers
│               └── schemas
```

### Domain

Contém a camada de domínio da aplicação e as lógicas de negócio.

```shell
│   ├── domain
│   │   ├── entities
│   │   │   ├── types
│   │   │   │   ├── CategoriaType.ts
│   │   │   │   └── produtoType.ts
│   │   │   ├── valueObjects
│   │   │   │   ├── cpf.ts
│   │   │   │   └── email.ts
│   │   │   ├── categoria.ts
│   │   │   ├── ImagemProduto.ts
│   │   │   └── produto.ts
│   │   ├── repositories
│   │   │   ├── categoriaRepository.ts
│   │   │   └── produtoRepository.ts
│   │   └── useCases
│   │       ├── categoriaUseCase.ts
│   │       └── produtoUseCase.ts

```

O diretório `domain` contém as entidades definidoras do negócio, como `produto`, `categoria` e seus casos de uso. A interface entre a camada de domínio e o restante da aplicação foi definida através do uso de interfaces em `repositories`.

### datasources

Contém a camada responsável pela comunicação com as diversas bases de dados utilizadas pelo serviço.

```shell
│   ├── datasources
│   │   └── database
│   │       ├── config
│   │       │   ├── interfaces
│   │       │   │   └── db.config.interface.ts
│   │       │   └── db.config.ts
│   │       ├── models
│   │       │   ├── categoriaModel.ts
│   │       │   ├── index.ts
│   │       │   ├── produtoImagensModel.ts
│   │       │   └── produtoModel.ts
│   │       ├── repository
│   │       │   ├── categoriaDatabaseRepository.ts
│   │       │   └── produtoDatabaseRepository.ts
│   │       └── seeders
│   │           └── cria-categorias.ts

```


### interface adapters e presenters

A camada de adapters e presenters interagem com o core da aplicação.

```shell
│   ├── interfaceAdapters
│   │   └── controllers
│   │       ├── categoriaController.ts
│   │       └── produtoController.ts
│   ├── presenters
│   │   └── api
│   │       ├── config
│   │       │   ├── interfaces
│   │       │   │   └── server.config.interface.ts
│   │       │   └── server.config.ts
│   │       ├── routers
│   │       │   ├── schemas
│   │       │   │   ├── categoriaRouter.schema.ts
│   │       │   │   └── produtoRouter.schema.ts
│   │       │   ├── categoriaRouter.ts
│   │       │   ├── index.ts
│   │       │   ├── produtoRouter.ts
│   │       │   └── utils.ts
│   │       ├── index.ts
│   │       └── swaggerConfig.ts
```
