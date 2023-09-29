import { Request, Response } from 'express'
import { CreateClaimCommand } from '../../application/commands/create.claim.command'
import createClaimHandlers from '../../application/handlers/create.claim.handlers'

class CreateUserAction {
  async run (req: Request, res: Response) {
    const { ownerId, title, description, categoryId, location, createdAT, pin } =
      req.body

    const command = new CreateClaimCommand(
      ownerId,
      title,
      description,
      categoryId,
      location,
      createdAT,
      pin
    )
    await createClaimHandlers.execute(command)
    return res.status(201).json({ message: 'User Created' })
  }
}
export default new CreateUserAction()
