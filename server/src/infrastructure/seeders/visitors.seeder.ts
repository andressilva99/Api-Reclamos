import Visitor from "../../domain/entities/visitor.entities";
import visitorRepository from "../repositories/visitor.repository";

class VisitorSeeder {
  private visitor: Array<Visitor> = [];
  
  public constructor() {
    this.visitor.push(Visitor.create("interno", "3782", "hola"));
    this.visitor.push(Visitor.create("receptor", "3412", "hola"));
    this.visitor.push(Visitor.create("emisor", "2714", "hola"));
  }

  public async generate(): Promise<void> {
    for (const visitor of this.visitor) {
      await visitorRepository.save(visitor);
    }
  }
}

export default new VisitorSeeder();
