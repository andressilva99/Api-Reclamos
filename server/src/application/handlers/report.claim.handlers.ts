import { ReportClaimCommand } from "../commands/report.claim.command";
import claimRepository from "../../infrastructure/repositories/claim.repository ";
import Claim from "../../domain/entities/claim.entities";

class ReportClaimHandler{
    async execute(command: ReportClaimCommand) {
        const claimOriginal: Claim|null = await claimRepository.findOneById(command.getIdClaimOriginal());
        const claimDuplicado: Claim|null = await claimRepository.findOneById(command.getIdClaimDuplicado());

        if(claimOriginal.getCreatedAT() < claimDuplicado.getCreatedAT()) {

        }
    }
}

export default new ReportClaimHandler();