import { Request, Response } from "express";
import { ReportClaimCommand } from "../../application/commands/report.claim.command";
import  ReportClaimHandler  from "../../application/handlers/report.claim.handlers";

class ReportClaimAction {
    async run (req: Request, res: Response) {
        try {
            const reportClaim = new ReportClaimCommand(
                req.params.idClaimOriginal,
                req.params.idClaimDuplicado
            )

            try {
                await ReportClaimHandler.execute(reportClaim);
            } catch{}
        } catch{}
    }
}