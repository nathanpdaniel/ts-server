import { Router, Request, Response, NextFunction } from 'express';

export class MainRouter {
  router:Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  public pending(req:Request, res:Response, next:NextFunction) {
    res.sendStatus(501);
  }

  public baseRequest(req:Request, res:Response, next:NextFunction) {
    res.sendStatus(200);
  }


  init() {
    this.router.get('/', this.baseRequest);
    this.router.post('/connect', this.pending);
    this.router.post('/disconnect', this.pending);
  }
}

const mainRoutes = new MainRouter();
mainRoutes.init();

export default mainRoutes.router;