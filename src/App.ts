import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import MainRouter from './routes/MainRoutes';

class App {
  public express:express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware():void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes():void {
    this.express.use('/', MainRouter);
  }
}

export default new App().express;