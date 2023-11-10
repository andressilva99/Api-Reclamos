import Category from "./category.entities";
import Visitor from "./visitor.entities";
import { v4 } from 'uuid';
class Claim {
  private id: string;
  private owner: Visitor;
  private title: string;
  private description: string;
  private category: Category;
  private location: string;
  private createdAT: Date;
  private cloneOf?: Claim | undefined;
  private like: number;
  private dislike: number;
  private constructor(
    id: string,
    owner: Visitor,
    title: string,
    description: string,
    category: Category,
    location: string,
    createdAT: Date,
    cloneOf?: Claim | undefined,
  ) {
    this.id = id;
    this.owner = owner;
    this.title = title;
    this.description = description;
    this.category = category;
    this.location = location;
    this.createdAT = createdAT;
    this.cloneOf = cloneOf;
    this.like = 0;
    this.dislike = 0;
  }

  public getId(): string {
    return this.id;
  }
  public getAddLike() {
    return this.like++;
  }
  public getAddDislike() {
    return this.dislike++;
  }
  public getSetCloneOf(cloneOf: Claim) {
    this.cloneOf = cloneOf;
  }
  public getLike(){
    return this.like;
  }
  static create(owner: Visitor, title: string, description: string, category: Category, location: string, createAt: Date): Claim {
    return new Claim(v4(), owner, title, description, category, location, createAt);
  }
}

export default Claim;
