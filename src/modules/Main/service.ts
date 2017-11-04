import RPC from '../RPC';

export class MainService implements RPC.IService {
  load(callSignature?:any):Promise<Response> {
    // make external API calls using something like this
    return fetch(callSignature);
  }
}

export default MainService;