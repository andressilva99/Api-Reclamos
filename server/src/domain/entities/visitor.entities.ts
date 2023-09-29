class Visitor {
    private id:string
    private ip: string
    private nickname: string
    private constructor(
        id:string,
        ip: string,
        nickname: string
    ){
        this.id = id;
        this.ip = ip;
        this.nickname = nickname;
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
}


export default Visitor
