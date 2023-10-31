import Category from "./category.entities";
import Visitor from "./visitor.entities";

class Claim {
  private id: string;
  private owner: Visitor;
  private title: string;
  private description: string;
  private category: Category;
  private location: string;
  private createdAT: Date;
  private like: number;
  private dislike: number;
  private cloneOf?: Claim | undefined;
  static create: any;

  private constructor(
    id: string,
    owner: Visitor,
    title: string,
    description: string,
    category: Category,
    location: string,
    createdAT: Date,
    cloneOf?: Claim,
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
  public getOwner(): Visitor {
    return this.owner;
  }
  public getTitle(): string {
    return this.title;
  }
  public getDescripcion(): string {
    return this.description;
  }
  public getCategory(): Category {
    return this.category;
  }
  public getLocation(): string {
    return this.location;
  }
  public getCreatedAT(): Date {
    return this.createdAT;
  }
  public getCloneOf(): Claim | undefined {
    return this.cloneOf;
  }
  public addLike() {
    return this.like++;
  }
  public addDislike() {
    return this.dislike++;
  }
}
export default Claim;
