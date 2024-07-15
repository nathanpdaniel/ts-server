import { Request, Response } from 'express'
import RPC from '../../RPC'

export class MainCommand implements RPC.ICommand {
  private _response: Response
  constructor(response: Response) {
    this._response = response
  }

  public execute<Request>(request: Request): void {
    this._response.send('STATUS OK')
  }
}
