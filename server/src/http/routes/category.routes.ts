import { Application } from "express";
import CommonRoutes from "./common.routes";
import getCategoriesAction from "../actions/get.categories.action";


class CategoryRoutes extends CommonRoutes{
    public constructor (app: Application){
        super(app, 'Category')
    }

    setUpRoutes(): Application {
        this.app.get('/category', getCategoriesAction.run);

        return this.app;
    }
}

export default CategoryRoutes;