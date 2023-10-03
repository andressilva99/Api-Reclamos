import Categories from '../../domain/entities/category.entities';
import categoriesRepository from '../repositories/category.repository';

class CategoriesSeeder {
  private categories: Array<Categories> = [];
  
  public constructor() {
    this.categories.push(Categories.create('VIP', 5025));
    this.categories.push(Categories.create('clase media', 9050));
    this.categories.push(Categories.create('primera clase', 9506));
    this.categories.push(Categories.create('categoria B', 7894));
    this.categories.push(Categories.create('categoria C', 1236));
  }

  public async generate(): Promise<void> {
    for (const categories of this.categories) {
      await categoriesRepository.save(categories);
    }
  }
}

export default new CategoriesSeeder();