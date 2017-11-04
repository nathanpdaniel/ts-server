import IEvent from './IEvent';

namespace RPC {
  export interface ICommand {
    event(event:IEvent):void;
  }

  export interface IResponder {
    result(data:any):void;
    fault(error:any):void;
  }

  export interface IService {
    call(callSignature?:any):Promise<Response>;
  }
}

export default RPC;