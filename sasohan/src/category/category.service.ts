import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entity/category.entity';
import { CategoryDto } from 'src/dto/category.dto';

@Injectable()
export class CateogryService {
  constructor(@InjectRepository(Category) private readonly categoryRepo: Repository<Category>) {}

  getAll(): Promise<Category[]> {
    return this.categoryRepo.find();
  }

  getOne(id: string) {
    return this.categoryRepo.findOne(id);
  }

  createOneCategory(categoryDto: CategoryDto): Promise<CategoryDto> {
    return this.categoryRepo.save(categoryDto);
  }

  deleteOneCategory(id: string) {
    return this.categoryRepo.delete(id);
  }

  updateOneCategory(id: string, updateCategoryDto: CategoryDto) {
    return this.categoryRepo.update(id, updateCategoryDto);
  }

}
