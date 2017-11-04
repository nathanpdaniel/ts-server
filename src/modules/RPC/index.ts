export namespace RPC {
  export interface IEvent {
    type:string;
  }

  export interface ICommand {
    event(event:IEvent):void;
  }

  export interface IResponder {
    result(data:any):void;
    fault(error:any):void;
  }

  export interface IService {
    load(callSignature?:any):Promise<Response>;
  }
}

export default RPC;