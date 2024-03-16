import swaggerJsdoc from 'swagger-jsdoc';
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Fiap Tech Challenge Soat - Microservico Produtos',
      version: '1.0.0',
      description: 'Projeto Fase 5 - SOAT turma I',
    },
    servers: [
      { url: "/api" }
    ]
  },
  apis: ['**/routers/*.*'],
};

const specs = swaggerJsdoc(options);

export default specs;
