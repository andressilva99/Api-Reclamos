import claimRepository from "../../infrastructure/repositories/claim.repository ";
import Claim from "../../domain/entities/claim.entities";
import { Request, Response } from "express";

class GetOnFireAction {
  async run(req: Request, res: Response) {
    try {
      const getonfireaction: Claim[] = await claimRepository.listTop5ByLikes();
      return res.status(200).json(getonfireaction);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({
          error: "Ocurrio un error al obtener los últimos cinco resultados",
        });
    }
  }
}

export default new GetOnFireAction();
