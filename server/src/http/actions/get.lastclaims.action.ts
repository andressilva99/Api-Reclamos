import { Request, Response } from "express";
import Claim from "../../domain/entities/claim.entities";
import claimRepository from "../../infrastructure/repositories/claim.repository ";

class GetLastClaimsAction {
  async run(req: Request, res: Response) {
    const getLastClaimsAction: Claim[] = await claimRepository.listLastFive();
    return res.status(200).json(getLastClaimsAction);
  }
}

export default new GetLastClaimsAction();
