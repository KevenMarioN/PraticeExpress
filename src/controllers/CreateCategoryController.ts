import { Request,Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";

export class CreateCategoryController {
  async handle(request : Request,response : Response){
    const {name,description} = request.body;

    const service = new CreateCategoryService();
    try {
      const result = await service.execute({name,description});
      response.statusCode = 201;
      response.send(result);
    } catch (error) {
      response.statusCode = 400;
      response.send(error);
    }
  
  }
}