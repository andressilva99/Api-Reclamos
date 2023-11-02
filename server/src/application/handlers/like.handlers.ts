import { LikeCommand } from "../commands/like.command";
import Claim from "../../domain/entities/claim.entities";
import Visitor from "../../domain/entities/visitor.entities";
import visitorRepository, {VisitorRepository} from "../../infrastructure/repositories/visitor.repository";
import claimRepository, {ClaimRepository} from "../../infrastructure/repositories/claim.repository";

export class LikeHandler {
  private visitorRepository: VisitorRepository;
  private claimRepository: ClaimRepository;

  public constructor(
    visitorRepository: VisitorRepository,
    claimRepository: ClaimRepository,
  ){
    this.visitorRepository = visitorRepository;
    this.claimRepository = claimRepository;
  }


  async execute(command: LikeCommand) {
    const claim: Claim | null = await this.claimRepository.findOneById(
      command.getIdClaim()
    );

    if (!claim) {
      throw new Error("Claim not found");
    }

    const visitor: Visitor | null = await this.visitorRepository.findOneById(
      command.getIdVisitor()
    );

    if (!visitor) {
      throw new Error("Visitor not found");
    }
    const isValid = visitor.getPin() === command.getPinVisitor();

    if (!isValid) {
      throw new Error("Pin does not match");
    }

    claim.addLike(visitor.getId());

    await claimRepository.save(claim);
  }
}

export default new LikeHandler(visitorRepository,claimRepository);
