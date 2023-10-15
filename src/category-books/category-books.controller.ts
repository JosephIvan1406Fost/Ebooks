import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { CategoryBooksService } from './category-books.service';
import { CreateCategoryBooksDto } from './dto/create-category-books.dto';
import { UpdateCategoryBooksDto } from './dto/update-category-books.dto'; 

@Controller('category-books')
export class CategoryBooksController {
  constructor(private readonly categoryBooksService: CategoryBooksService) {}

  @Get()
  getCategoryBooks() {
    return this.categoryBooksService.getCategoryBooks();
  }

  @Get(':id')
  getCategoryBookss(@Param('id') id: number) {
    return this.categoryBooksService.getCategoryBookss(id);
  }

  @Post()
  createCategoryBooks(@Body() newCategoryBooks: CreateCategoryBooksDto) {
    return this.categoryBooksService.createCategoryBooks(newCategoryBooks);
  }

  @Delete(':id')
  deleteCategoryBooks(@Param('id') id: number) {
    return this.categoryBooksService.deleteCategoryBooks(id);
  }

  @Patch(':id')
  updateCategoryBooks(@Param('id') id: number, @Body() categoryBooks: UpdateCategoryBooksDto) {
    return this.categoryBooksService.updateCategoryBooks(id, categoryBooks);
  }
}
