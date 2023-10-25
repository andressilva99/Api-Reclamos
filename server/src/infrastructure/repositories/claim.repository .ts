import Claim from '../../domain/entities/claim.entities';
import Visitor from '../../domain/entities/visitor.entities';
import visitorRepository from './visitor.repository';
class ClaimRepository {
    private claims: Claim[];

    public constructor() {
        this.claims = []
    }


    public async save(claim: Claim): Promise<void> {
        const saveClaim = this.claims.find(a => a.getId() === claim.getId());

        if (saveClaim) {
            this.claims.splice(this.claims.indexOf(saveClaim), 1);
        }
        this.claims.push(claim)
    }

    public async findOneById(id: string): Promise<Claim | null> {
        const claim = this.claims.find(a => a.getId() === id);

        return claim ? claim:null;
    } 

    public async listLastFive() {
        const lastFive:Claim[] = this.claims.slice(-5);

        return lastFive;
    }

    public async listLastFiveByVisitor(owner: Visitor) {
        const claimsVisitor:Claim[] = this.claims.filter((claim) => claim.getOwner() === owner);
        const lastFive: Claim[] = claimsVisitor.slice(-5);
        return lastFive;
    }
}

export default new ClaimRepository();