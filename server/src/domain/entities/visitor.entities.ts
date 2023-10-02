class Visitor {
    private id:string
    private ip: string
    private nickname: string
    private pin: string;
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
}


export default Visitor
