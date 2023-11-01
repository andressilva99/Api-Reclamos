import { ReportClaimCommand } from "../commands/report.claim.command";
import claimRepository from "../../infrastructure/repositories/claim.repository ";
import Claim from "../../domain/entities/claim.entities";

class ReportClaimHandler{
    async execute(command: ReportClaimCommand) {
        const claimOriginal: Claim|null = await claimRepository.findOneById(command.getIdClaimOriginal());
        const claimDuplicado: Claim|null = await claimRepository.findOneById(command.getIdClaimDuplicado());


        if(!claimOriginal) {
            throw new Error("Original Claim not Found!...");
        }
        else {
            if (!claimDuplicado) {
                throw new Error("Reported Claim Not Found!...");
            }
            else {
                if(claimOriginal.getCreatedAT()<claimDuplicado.getCreatedAT())
                {
                    claimDuplicado?.setCloneOf(claimOriginal);
                    await claimRepository.save(claimDuplicado);
                } else throw new Error ("Reported claim date prior to the selected one!...");
            }
        }
    }
}

export default new ReportClaimHandler();