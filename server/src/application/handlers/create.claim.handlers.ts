import Claim from "../../domain/entities/claim.entities";
import claimRepository from "../../infrastructure/repositories/claim.repository ";
import { CreateClaimCommand } from "../commands/create.claim.command";


class CreateClaimHandlers{
    async execute(command: CreateClaimCommand){
        const claim = Claim.create(
            command.getOwner(),
            command.getTitle(),
            command.getDescription(),
            command.getCategory(),
            command.getLocation(),
            command.getCreatedAT()
        );

        await claimRepository.save(claim)
    }
}

export default new CreateClaimHandlers();