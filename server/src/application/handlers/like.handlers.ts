import { LikeCommand } from "../commands/like.command";
import claimRepository from "../../infrastructure/repositories/claim.repository ";
import Claim from "../../domain/entities/claim.entities";
import Visitor from "../../domain/entities/visitor.entities";
import visitorRepository from "../../infrastructure/repositories/visitor.repository";


class LikeHandler {
    async execute(command: LikeCommand){
        const claim: Claim|null = await claimRepository.findOneById(command.getIdClaim())

        if(!claim) throw new Error("CLAIM NOUT FOUND");

        const visitor: Visitor|null = await visitorRepository.findOneById(command.getIdVisitor())

        if(!visitor) throw new Error("VISITOR NOUT FOUND");

        const isValid = (visitor.getPin === command.getPinVisitor);

        if(!isValid) throw new Error("PIN NO VALIDO");

        claim.addLike();

        await claimRepository.save(claim)
    }
}

export default new LikeHandler;