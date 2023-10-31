import { Request, Response } from "express";
import { DislikeCommand } from "../../application/commands/dislike.command";
import DislikeHandlers from "../../application/handlers/dislike.handlers";

class DislikeAction {
    async run(req: Request, res: Response){
        try{
            const dislike = new DislikeCommand(
                req.params.idClaim,
                req.params.idVisitor,
                req.params.pinVisitor
            );

            try {
                await DislikeHandlers.execute(dislike)
            }
            catch (error){
                return res.status(404).json({message: "ERROR"});
            }
        }catch (e){
            console.log(e)
        }
    }
}

export default DislikeAction;
