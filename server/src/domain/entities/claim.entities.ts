import Category from "./category.entities";
import Visitor from "./visitor.entities";

/*
category: Category
cloneOf: ?Claim
*/
class Claim {
  private id: string;
  private owner: Visitor;
  private title: string;
  private description: string;
  private category: Category;
  private location: string;
  private createdAT: Date;
  private cloneOf?: Claim;

  private constructor(
    id: string,
    owner: Visitor,
    title: string,
    description: string,
    category: Category,
    location: string,
    createdAT: Date,
    cloneOf?: Claim
  ){
    this.id = id;
    this.owner = owner;
    this.title = title;
    this.description = description;
    this.category = category;
    this.location = location;
    this.createdAT = createdAT;
    this.cloneOf = cloneOf;
  }
  public getId(): string {
    return this.id;
  }
}
export default Claim;
