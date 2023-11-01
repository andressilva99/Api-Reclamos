import { Application } from "express";
import CommonRoutes from "./common.routes";
import createClaimAction from "../actions/create.claim.action";
import getLastClaimsAction from "../actions/get.last.claims.action"
import ReportClaimAction from "../actions/report.claim.action"

class ClaimRoutes extends CommonRoutes {
    constructor(app: Application) {
        super(app, 'Claim')
    }

    setUpRoutes():Application {
        this.app.post('/claim', createClaimAction.run);
        this.app.get('/claim', getLastClaimsAction.run);
        this.app.put('/claim', ReportClaimAction.run);
        return this.app;
    }
}

export default ClaimRoutes;