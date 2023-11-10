import { Application } from 'express';
import CommonRoutes from './common.routes';
import createVisitorAction from '../actions/create.visitor.action';
import GetVisitorAction from '../actions/get.visitor.action';

class VisitorRoutes extends CommonRoutes {
    public constructor (app: Application){
        super(app, 'Visitor');
    }
    
    public setUpRoutes(): Application {
        this.app.get('/visitor', GetVisitorAction.run)
        this.app.post('/visitor', createVisitorAction.run)
        return this.app;
    }    
}
export default VisitorRoutes;
//