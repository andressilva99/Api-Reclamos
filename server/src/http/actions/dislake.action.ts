import { Request, response } from "express";
import { DislikeCommand } from "../../application/commands/like.command";
import DislikeHandlers from "../../application/handlers/like.handlers";

class DislakeAction {
    async run(req: Request, res: Response){
        try{
            const dislake = new DislikeCommand(
                req.params.idClaim,
                req.params.idVisitor,
                req.params.pinVisitor
            );

            try {
                await DislikeHandlers.execute(dislake)
            }
            catch (error){
                return res.status(404).json({message: "ERROR"});
            }
        }catch (e){
            console.log(e)
        }
    }
}