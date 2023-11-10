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
    like: number,
  ) {
    this.id = id;
    this.owner = owner;
    this.title = title;
    this.description = description;
    this.category = category;
    this.location = location;
    this.createdAT = createdAT;
    this.like = like;
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
  public getAddLike() {
    return this.like++;
  }
  public getAddDislike() {
    return this.dislike++;
  }
  public getLike(){
    return this.like;
  }
  static create(owner: Visitor, title: string, description: string, category: Category, location: string, createAt: Date, like: number): Claim {
    return new Claim(v4(), owner, title, description, category, location, createAt, like);
  }
}

export default Claim;
