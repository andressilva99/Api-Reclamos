import { Request, Response } from "express";
import Category from "../../domain/entities/category.entities";
import categoryRepository from "../../infrastructure/repositories/category.repository";

class GetCategoriesAction {
    async run(_req: Response, res: Response){
        const categories: Category[] = await categoryRepository.getAllCategory();

        return res.status(200).json(categories);
    }

}

export default new GetCategoriesAction();