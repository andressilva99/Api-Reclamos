import { Request, Response } from "express";
import Visitor from "../../domain/entities/visitor.entities";
import visitorRepository from "../../infrastructure/repositories/visitor.repository";

class GetVisitorAction {
  async run(_req: Request, res: Response) {
    const visitors: Visitor[] = await visitorRepository.findAll();
    return res.status(200).json(visitors);
  }
}

export default new GetVisitorAction();
