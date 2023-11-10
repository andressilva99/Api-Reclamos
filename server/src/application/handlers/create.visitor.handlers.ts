import Visitor from "../../domain/entities/visitor.entities";
import visitorRepository from "../../infrastructure/repositories/visitor.repository";
import { CreateVisitorCommand } from "../commands/create.visitor.command";

class createVisitorHandler {
  async execute(command: CreateVisitorCommand) {
    const user = Visitor.create(
      command.getId(),
      command.getIp(),
      command.getNickName(),
    );
    await visitorRepository.save(user);
  }
}

export default new createVisitorHandler();
