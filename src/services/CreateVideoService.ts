import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import {Video} from '../entities/Video';

type VideoRequest = {
  name : string;
  description : string;
  duration : number;
  category_id : string;
}

export class CreateVideoService {
  async execute({
    name,
    category_id,
    description,
    duration}:VideoRequest) : Promise<Error | Video>{
    const repo = getRepository(Video)
    const repoCategory = getRepository(Category);

    if(!await repoCategory.findOne(category_id)){
      return new Error('Category does not exists!')
    }
    
    if(!name || !description|| !category_id){
      return new Error("Name,Description, Category does not null");
    }

    const video = repo
    .create({name,description,duration,category_id});

    await repo.save(video);
    return video;
  }
}