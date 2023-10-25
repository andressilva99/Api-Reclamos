import { Application } from 'express';
import CommonRoutes from './common.routes';
import createCategoryAction from '../actions/create.category.action';
import updateCategoryAction from '../actions/update.category.action';
import findCategoryAction from '../actions/find.category.action';

class CategoryRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'Category');
  }

  public setUpRoutes(): Application {
    this.app.post('/category', createCategoryAction.run);
    this.app.get('/category', findCategoryAction.run);
    this.app.put('/category/:id', updateCategoryAction.run);

    return this.app;
  }
}

export default CategoryRoutes