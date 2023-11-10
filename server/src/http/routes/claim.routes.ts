import { Application } from "express";
import CommonRoutes from "./common.routes";
import createClaimAction from "../actions/create.claim.action";
import getLastclaimsAction from "../actions/get.lastclaims.action";
import GetOnFireActionLastHour from "../actions/get.onfivelasthour.action";
import GetOnFireAction from "../actions/get.onfireactions";
import ReportClaimAction from "../actions/report.claim.action";

class ClaimRoutes extends CommonRoutes {
    constructor(app: Application) {
        super(app, 'Claim')
    }

    setUpRoutes():Application {
        this.app.post('/claim', createClaimAction.run);
        this.app.get('/claim', getLastclaimsAction.run);
        this.app.put('/claim/:id/report', ReportClaimAction.run)
        this.app.get('/claim/last', GetOnFireActionLastHour.run);
        this.app.get('/claim/on-fire', GetOnFireAction.run);

        return this.app;
    }
}

export default ClaimRoutes;