import Category from "../../domain/entities/category.entities";
import categoryRepository from "../../infrastructure/repositories/category.repository";
import { GetCategoriesCommand } from "../commands/get.categories.command";

class GetCategoryHandlers {
  async execute(command: GetCategoriesCommand) {
    return categoryRepository.getAllCategory();
  }
}

export default new GetCategoryHandlers();
