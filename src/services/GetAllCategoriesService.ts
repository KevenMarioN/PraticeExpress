import { getRepository } from "typeorm";
import { Category } from "../entities/Category";


export class GetAllCategoriesServices {
  async execute() {
    const repo = getRepository(Category);

    const categories = await repo.find();
    if(categories.length < 1)
      return "Sem Dados"
    return categories;
  }
}