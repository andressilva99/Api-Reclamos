import { Application } from 'express';
import CommonRoutes from './common.routes';
import createClaimAction from '../actions/create.claim.action';
import updateClaimAction from '../actions/update.claim.action';
import findClaimAction from '../actions/find.claim.action';

class ClaimRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'Claim');
  }

  public setUpRoutes(): Application {
    this.app.post('/claim', createClaimAction.run);
    this.app.get('/claim', findClaimAction.run);
    this.app.put('/claim/:id', updateClaimAction.run);

    return this.app;
  }
}

export default ClaimRoutes