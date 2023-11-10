import claimRepository from "../../infrastructure/repositories/claim.repository ";
import Claim from "../../domain/entities/claim.entities";
import { Request, Response } from "express";

class GetOnFireActionLastHour {
  async run(req: Request, res: Response) {
    try {
      const getonfireaction: Claim[] =
        await claimRepository.listTop5ByLikesInLastHour();
      return res.status(200).json(getonfireaction);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error:
          "Ocurrio un error al obtener los últimos cinco con más me gusta de la última hora",
      });
    }
  }
}

export default new GetOnFireActionLastHour();
