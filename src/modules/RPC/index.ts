import { Request, Response } from 'express'
import IEvent from './IEvent'

namespace RPC {
  export interface ICommand {
    execute<T>(request?: T): void
  }

  export interface IResponder {
    result<T>(data: T): void
    fault<T>(error: T): void
  }

  export interface IService {
    call(callSignature?: any): void
  }
}

export default RPC

export type RouteHandler = [
  'get' | 'post' | 'put' | 'patch' | 'delete',
  string,
  any
]
