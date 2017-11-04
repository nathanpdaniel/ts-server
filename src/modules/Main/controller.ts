import { MainResponse } from './response';
import { MainService } from './service';

export class MainController {
  pending():Promise<Response> {
    // DB updates
    // 3rd party API calls
    // any external modifications...
    
    var service:MainService = new MainService();
    return service.load({});
  }
}

export default MainController;