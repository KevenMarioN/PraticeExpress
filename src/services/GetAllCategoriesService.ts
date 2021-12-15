import { getRepository } from "typeorm";
import { Category } from "../database/entities/Category";

export class GetAllCategoriesServices {
  async execute() {
    const repo = getRepository(Category);

    const categories = await repo.find();

    return categories;
  }
}