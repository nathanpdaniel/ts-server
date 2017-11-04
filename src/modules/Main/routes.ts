import { Router, Request, Response, NextFunction } from 'express';
import RPC from '../RPC';
import IHTTPResponse from '../RPC/IHTTPResponse';
import { MainController } from './';

export class MainRouter {
  router:Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  public pending(req:Request, res:Response, next:NextFunction) {
    const mainCtrl = new MainController();
    
    mainCtrl.pending().then((response:any) => {
      // data processing here
      res.sendStatus(204);
    }).catch((error:any) => {
      res.sendStatus(501);
    });
    
  }

  public baseRequest(req:Request, res:Response, next:NextFunction) {
    res.sendStatus(200);
  }


  init() {
    this.router.get('/', this.baseRequest);
    this.router.get('/connect', this.pending);
    this.router.post('/connect', this.pending);
    this.router.post('/disconnect', this.pending);
  }
}

export default MainRouter;