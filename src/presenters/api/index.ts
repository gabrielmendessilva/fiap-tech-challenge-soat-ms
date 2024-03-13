import express, { Express } from "express";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";

import { Server } from "./config/server.config";
import { categoriaRouter, produtoRouter } from "./routers/index";
import specs from "./swaggerConfig";

export default class API {
  private app: Express;

  constructor() {
    this.app = express();
  }

  start() {
    this.app.use(helmet());

    this.app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(specs, { explorer: true })
    );

    const server = new Server({ appConfig: this.app });

    server.addRouter("/api/categoria", categoriaRouter);
    server.addRouter("/api/produto", produtoRouter);

    server.init();
  }
}
