class Visitor {
    private id:string;
    private ip: string;
    private nickname: string;
    private pin: string;
    static create: any;
    private owner: Visitor;

    private constructor(
        id:string,
        ip: string,
        nickname: string,
        pin: string,
        owner: Visitor
    ){
        this.id = id;
        this.ip = ip;
        this.nickname = nickname;
        this.pin = pin;
        this.owner = owner;
    }

    public getId(): string{
      return this.id;
    }
    public getIp(): string {
      return this.ip;
    }
    public getNickName(): string {
      return this.nickname;
    }
    public getPin(): string{
      return this.pin;
    }
    public getOwner(): Visitor{
      return this.owner;
    }
}


export default Visitor
