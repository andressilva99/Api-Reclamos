import { Request, Response } from "express";
import { LikeCommand } from "../../application/commands/like.command";
import likeHandlers from "../../application/handlers/like.handlers";


class LikeAction {
    async run(req: Request, res: Response) {
        
        try {
            const like = new LikeCommand(
                req.params.idClaim,
                req.params.idVisitor,
                req.params.pinVisitor
            );

            try {
                await likeHandlers.execute(like);
            } catch (error) {
                return res.status(404).json({message: "ERROR"});
            }
        } 
        catch{}
        
    }
}