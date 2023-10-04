import { Request, Response } from "express";
import { CreateVisitorCommand } from "../../application/commands/create.visitor.command";
import createVisitorHandler from "../../application/handlers/create.visitor.handlers";

class createVisitorAction {
    async run(req: Request, res: Response) {
        const { id, ip, nickname, pin } = req.body;

        const command = new CreateVisitorCommand(id, ip, nickname, pin);

        await createVisitorHandler.execute(command);

        return res.status(201).json({ message: "User created" });
    }
}
export default new createVisitorAction();
