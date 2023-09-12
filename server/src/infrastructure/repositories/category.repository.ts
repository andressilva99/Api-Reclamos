import Category from '../../domain/entities/category.entity';

class CategoryRepository {
    private categorys: Category[];

    public constructor() {
        this.categorys = []
    }


    public async save(category: Category): Promise<void> {
        const saveCategory = this.categorys.find(a => a.getId() === category.getId());

        if (saveCategory) {
            this.categorys.splice(this.categorys.indexOf(saveCategory), 1);
        }
        this.categorys.push(category)
    }

    public async findOneById(id: string): Promise<Category | null> {
        const category = this.categorys.find(a => a.getId() === id);

        return category ? category:null;
    } 

    public async getAllCategory(): Promise<Category | null>{
        const category = this.categorys.find(a => a.getAll());

        return category ? category:null;
    } 
}

export default new CategoryRepository();