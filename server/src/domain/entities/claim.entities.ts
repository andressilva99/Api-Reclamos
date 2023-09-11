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
}
export default Claim;
