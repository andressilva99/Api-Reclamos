import Visitor from "../../domain/entities/visitor.entities";
class VisitorRepository {
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

  async findAll(): Promise<Visitor[]> {
    const visitors = this.visitors;
    return visitors;
  }

  public async listLastFive() {
    const lastFive: Visitor[] = this.visitors.slice(-5);
    return lastFive;
  }

  public async listLastFiveByVisitor(id: string) {
    const claimsVisitor: Visitor[] = this.visitors.filter(
      (Visitor) => Visitor.getId() === id
    );
    const lastFive: Visitor[] = claimsVisitor.slice(-5);
    return lastFive;
  }
}

export default new VisitorRepository();
