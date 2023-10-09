import { Request, Response } from "express";
import { DisLikeCommand } from "../../application/commands/dislike.command";
import likeHandlers from "../../application/handlers/like.handlers";

class DislikeAction {
  async run(req: Request, res: Response) {
    try {
      const like = new DisLikeCommand(
        req.params.idClaim,
        req.params.idVisitor,
        req.params.pinVisitor
      );

      try {
        await likeHandlers.execute(like);
      } catch (error) {
        return res.status(404).json({ message: "ERROR" });
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default DislikeAction;
