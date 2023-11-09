import Claim from "../../domain/entities/claim.entities";
import Visitor from "../../domain/entities/visitor.entities";
import Category from "../../domain/entities/category.entities";
import claimRepository from "../../infrastructure/repositories/claim.repository ";
import visitorRepository from "../../infrastructure/repositories/visitor.repository";
import categoryRepository from "../../infrastructure/repositories/category.repository";

class ClaimSeeder {
    private claims: Claim[] = [];
    private visitors: Visitor[] = [];
    private categories: Category[] = [];

    public constructor(){
        this.generate();
    }


public async generate(){
    this.visitors = await visitorRepository.findAll();
    this.categories = await categoryRepository.getAllCategory();

    for (const visitor of this.visitors){
        for(const category of this.categories){
            this.claims.push(Claim.create(
                visitor,
                'Seeder title',
                'Seeder description',
                category,
                "Arroyito"
                )
            );
        }
    }

        for(const claim of this.claims){
            await claimRepository.save(claim);
        }
    } 
}

export default new ClaimSeeder();