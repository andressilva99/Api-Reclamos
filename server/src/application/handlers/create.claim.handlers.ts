import Claim from "../../domain/entities/claim.entities";
import claimRepository from "../../infrastructure/repositories/claim.repository ";
import { CreateClaimCommand } from "../commands/create.claim.command";

class CreateClaimHandlers {
  async execute(command: CreateClaimCommand) {
    const claim = Claim.create(
      command.getOwner(),
      command.getTitle(),
      command.getDescription(),
      command.getCategory(),
      command.getLocation(),
      command.getCreatedAT(),
      command.getLike(),
    );
    const pin = command.getPin();
    if (validacionPin(pin)) {
      await claimRepository.save(claim);
      console.log("Reclamo creado con exito.");
    } else {
      console.log(
        "Pin no valido. El reclamo no se ha podido tomar, verifique el pin!"
      );
    }
  }
}

function validacionPin(pin: string): boolean {
  const pinRegex = /^\d{6}$/;
  return pinRegex.test(pin);
}

export default new CreateClaimHandlers();
