import { Request, Response } from "express";
import Visitor from "../../domain/entities/visitor.entities";
import visitorRepository from "../../infrastructure/repositories/visitor.repository";

class GetLastClaimsVisitorAction {
    async run(req: Request, res: Response){
        try{
        const getLastClaimsVisitorAction: Visitor[] = await visitorRepository.listLastFive();
        return res.status(200).json(getLastClaimsVisitorAction);
    }catch(error){
        console.error(error);
        res.status(500).json({error :'Ocurrio un error al obtener las reclamaciones.'});
    }
  } 
}

export default new GetLastClaimsVisitorAction();
