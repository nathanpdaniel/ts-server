import { MainResponse } from './response';
import { MainService } from './service';

export class MainController {
  pending():Promise<Response> {
    // DB updates
    // 3rd party API calls
    // any external modifications...
    
    // Services implement RPC.IService interface
    // RPC.IService has 1 function `load(callSignature)` which returns a Promise<Response>
    var service:MainService = new MainService();
    return service.call({});
  }
}

export default MainController;