import { v4 } from "uuid";
class Visitor {
  id: string;
  ip: string;
  nickname: string;
  pin: string;

  private constructor(
    id: string,
    ip: string,
    nickname: string,
    pin: string,
  ) {
    this.id = id;
    this.ip = ip;
    this.nickname = nickname;
    this.pin = pin;
  }

  public getId(): string {
    return this.id;
  }
  public getPin(): string {
    return this.pin;
  }
  public static create(ip: string, nickname: string, pin: string): Visitor {
    return new Visitor(v4(), ip, nickname, pin);
  }
}

export default Visitor;
