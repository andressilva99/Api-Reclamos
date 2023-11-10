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
            this.claims.splice(this.claims.indexOf(saveClaim),);
        }
        this.claims.push(claim)
    }
    public async findOneById(id: string): Promise<Claim | null> {
        const claim = this.claims.find(a => a.getId() === id);
        return claim ? claim : null;
    }

    public async listLastFive() {
        const lastFive: Claim[] = this.claims.slice(-5);
        return lastFive;
    }

    public async listLastFiveByVisitor(owner: Visitor) {
        const claimsVisitor: Claim[] = this.claims.filter((claim) => claim.getOwner() === owner);
        const lastFive: Claim[] = claimsVisitor.slice(-5);
        return lastFive;
    }

    public async listTop5ByLikes(): Promise<Claim[]> {
        const allClaims: Claim[] = this.claims;
        const sortedClaims = allClaims.sort((a,b)=> b.getLike() - a.getLike())
        const top5Claims = sortedClaims.slice(0, 5);
        return top5Claims;
    }

    public async listTop5ByLikesInLastHour(): Promise<Claim[]> {
        const now = new Date();
        const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000); 
        const claimsInLastHour = this.claims.filter((claim) => claim.getCreatedAT() >= oneHourAgo);
        const sortedClaims = claimsInLastHour.sort((a, b) => b.getLike() - a.getLike());
        const top5Claims = sortedClaims.slice(0, 5);
        return top5Claims;
    }
}

export default new ClaimRepository();