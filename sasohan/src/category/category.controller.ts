import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryDto } from 'src/dto/category.dto';
import { Category } from '../entity/category.entity';
import { CateogryService } from './category.service';
 
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CateogryService){}
 
    @Get('all')
    async getAll():Promise<Category[]>{
        return await this.categoryService.getAll();
    }

    @Post()
    async create(@Body() createCategoryDto: CategoryDto) {
        const result = await this.categoryService.createOneCategory(createCategoryDto);
        return result;
    }

    @Get(":id") 
    async getOne(@Param("id") category_id: string) {
        const result = await this.categoryService.getOne(category_id);
        return result;
    }

    @Put(":id")
    async setOne(@Param("id") category_id: string, @Body() updateCategoryDto: CategoryDto) {
        const result = await this.categoryService.updateOneCategory(category_id, updateCategoryDto);
        return result; 
    }

    @Delete(":id")
    async deleteOne(@Param("id") category_id: string) {
        const ret = await this.categoryService.deleteOneCategory(category_id);
        return ret;
    }


}