import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryBooks } from './category-books.entity';
import { CategoryBooksService } from './category-books.service';
import { CategoryBooksController } from './category-books.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryBooks])],
  controllers: [CategoryBooksController],
  providers: [CategoryBooksService],

})
export class CategoryBooksModule {}


