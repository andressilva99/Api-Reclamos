export class CreateVisitorCommand {
  private readonly id: string;
  private readonly ip: string;
  private readonly nickname: string;
  private readonly pin: string;

  constructor(id: string, ip: string, nickname: string, pin: string) {
    this.id = id;
    this.ip = ip;
    this.nickname = nickname;
    this.pin = pin;
  }

  getId(): string {
    return this.id;
  }
  getIp(): string {
    return this.ip;
  }
  getNickName(): string {
    return this.nickname;
  }
  getPin(): string {
    return this.pin;
  }
}
