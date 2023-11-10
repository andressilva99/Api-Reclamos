import Category from "../../domain/entities/category.entities";
import Visitor from "../../domain/entities/visitor.entities";

export class CreateClaimCommand {
  private readonly ownerId: Visitor;
  private readonly title: string;
  private readonly description: string;
  private readonly categoryId: Category;
  private readonly location: string;
  private readonly createdAT: Date;
  private readonly pin: string;
  private readonly like: number;

  constructor(
    ownerId: Visitor,
    title: string,
    description: string,
    categoryId: Category,
    location: string,
    createdAT: Date,
    pin: string,
    like: number,
  ) {
    this.ownerId = ownerId;
    this.title = title;
    this.description = description;
    this.categoryId = categoryId;
    this.location = location;
    this.createdAT = createdAT;
    this.pin = pin;
    this.like = like;
  }

  getOwner(): Visitor {
    return this.ownerId;
  }
  getTitle(): string {
    return this.title;
  }
  getDescription(): string {
    return this.description;
  }
  getCategory(): Category {
    return this.categoryId;
  }
  getLocation(): string {
    return this.location;
  }
  getCreatedAT(): Date {
    return this.createdAT;
  }
  getPin(): string {
    return this.pin;
  }
  getLike(): number {
    return this.like;
  }
}
