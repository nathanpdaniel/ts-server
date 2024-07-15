import { Router, Request, Response, NextFunction } from 'express'
import RPC, { RouteHandler } from '../RPC'
import IHTTPResponse from '../RPC/IHTTPResponse'
import { MainController } from './'
import { MainCommand } from './commands/MainCommand'

export class MainRouter {
  public router: Router

  constructor() {
    this.router = Router()
    this.init()
  }

  private init() {
    this.router.get('/', MainController.handle)
    this.router.get('/connect', MainController.handle)
    this.router.post('/connect', MainController.handle)
    this.router.post('/disconnect', MainController.handle)
  }
}

export default MainRouter
