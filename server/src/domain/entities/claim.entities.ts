import Category from "./category.entities";
import Visitor from "./visitor.entities";
import {v4} from 'uuid';

class Claim {
  private id: string;
  private owner: Visitor;
  private title: string;
  private description: string;
  private category: Category;
  private location: string;
  private createdAT: Date;
  private likes: string[] = [];
  private dislikes: string[] = [];
  private cloneOf?: Claim | undefined;

  private constructor(
    id: string,
    owner: Visitor,
    title: string,
    description: string,
    category: Category,
    location: string,
    createdAT: Date,
    cloneOf?: Claim
  ) {
    this.id = id;
    this.owner = owner;
    this.title = title;
    this.description = description;
    this.category = category;
    this.location = location;
    this.createdAT = createdAT;
    this.cloneOf = cloneOf;
  }


  public static create(
    owner: Visitor,
    category: Category,
    title: string,
    description: string,
    location: string
  ): Claim {
    return new Claim(
      v4(),
      owner,
      title,
      description,
      category,
      location,
      new Date()
    )
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
  public getLikeCount() {
    return this.likes.length;
  }
  public getDislikeCount() {
    return this.dislikes.length;
  }
  public getSetCloneOf(cloneOf: Claim) {
    this.cloneOf = cloneOf;
  }

  addLike(id: string) {
    if (this.hasVisitorLiked(id)) {
      throw new Error('Visitor has already liked this claim.')
    }

    this.likes.push(id)
  }

  public hasVisitorLiked(id:string) {
    return this.likes.includes(id);
  }
}

export default Claim;
