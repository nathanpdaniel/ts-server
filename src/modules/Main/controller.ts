import { Request, Response } from 'express'
import RPC from '../RPC'
import { MainCommand } from './commands/MainCommand'

export class MainController {
  public static handle(request: Request, response: Response) {
    const handlers: Record<string, any> = {
      ['GET /']: MainCommand,
    }

    const { method, path } = request

    try {
      const key: string = `${method.toUpperCase()} ${path}`
      const cmd: RPC.ICommand = new handlers[key](response)
      cmd.execute<Request>(request)
    } catch (e) {
      response.sendStatus(500)
    }
  }
}

export default MainController
