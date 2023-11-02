import Visitor from "../../domain/entities/visitor.entities";
export class VisitorRepository {
  private visitors: Visitor[];
  public constructor() {
    this.visitors = [];
  }

  public async save(visitor: Visitor): Promise<void> {
    const saveVisitor = this.visitors.find(
      (a) => a.getId() === visitor.getId()
    );

    if (saveVisitor) {
      this.visitors.splice(this.visitors.indexOf(saveVisitor), 1);
    }
    this.visitors.push(visitor);
  }

  public async findOneById(id: string): Promise<Visitor | null> {
    const visitor = this.visitors.find((a) => a.getId() === id);
    return visitor ? visitor : null;
  }

  public async listLastFive() {
    const lastFive: Visitor[] = this.visitors.slice(-5);
    return lastFive;
  }
}

export default new VisitorRepository();
