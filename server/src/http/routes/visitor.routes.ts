import { Application } from 'express';
import CommonRoutes from './common.routes';
import createClaimAction from '../actions/create.claim.action';

class visitorRutes extends CommonRoutes
{
    public constructor (app: Application){
        super(app, 'visitor')
    }

    public setUpRoutes():Application {
        this.app.post('/visitor', createVisitorAction.run)

    }
}