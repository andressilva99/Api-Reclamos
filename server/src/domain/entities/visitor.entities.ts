class Visitor {
    private id:string
    private ip: string
    private nickname: string
    private pin: string;
    static create: any;

    private constructor(
        id:string,
        ip: string,
        nickname: string,
        pin: string
    ){
        this.id = id;
        this.ip = ip;
        this.nickname = nickname;
        this.pin = pin;
    }
    public getId(): string {
        return this.id;
      }
    public getIp(): string {
        return this.ip;
      }
    public getNickName(): string {
        return this.nickname;
      }
    public getPin():string {
      return this.pin;
    }
}


export default Visitor
