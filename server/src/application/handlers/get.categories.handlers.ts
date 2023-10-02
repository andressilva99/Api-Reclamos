import Category from "../../domain/entities/category.entities";
import categoryRepository from "../../infrastructure/repositories/category.repository";
import { GetCategoryCommand } from "../commands/get.categories.command";


class GetCategoryHandlers{
    async execute(command: GetCategoryCommand){
        const claim = Category.get(
            command.id(),
            command.name(),
            command.color(),
        );

        await categoryRepository.save(claim)
    }
}

export default new GetCategoryHandlers();