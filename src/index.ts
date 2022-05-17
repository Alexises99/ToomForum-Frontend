import { app } from "./app";
import http from 'http'
import config from "./utils/config";
import * as logger from "./utils/logger"
import { connectToDataBase } from "./utils/db";

const server = http.createServer(app)

connectToDataBase()
  .then (() => {
    server.listen(config.PORT, () => {
      logger.info(`Server listening on port ${config.PORT}`)
    })
 }
  ).catch((err: string) => logger.error(`${err}`))


