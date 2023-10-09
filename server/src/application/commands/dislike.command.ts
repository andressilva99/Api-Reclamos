export class DisLikeCommand{
    private readonly idClaim: string;
    private readonly idVisitor: string;
    private readonly pinVisitor: string;

    constructor(idClaim: string, idVisitor: string, pinVisitor: string){
        this.idClaim = idClaim;
        this.idVisitor = idVisitor;
        this.pinVisitor = pinVisitor;
    }

    getIdClaim():string{
        return this.idClaim;
    }

    getIdVisitor():string{
        return this.idVisitor;
    }

    getPinVisitor():string{
        return this.pinVisitor;
    }
}