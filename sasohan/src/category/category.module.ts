import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/entity/category.entity';
import { CategoryController } from './category.controller';
import { CateogryService } from './category.service';

 
@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CateogryService],
  controllers: [CategoryController],
})
export class CategoryModule {}