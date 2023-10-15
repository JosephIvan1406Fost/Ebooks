import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryBooks } from './category-books.entity';
import { CreateCategoryBooksDto } from './dto/create-category-books.dto';
import { UpdateCategoryBooksDto } from './dto/update-category-books.dto'; 

@Injectable()
export class CategoryBooksService {
  constructor(
    @InjectRepository(CategoryBooks)
    private categoryBooksRepository: Repository<CategoryBooks>,
  ) {}

  async createCategoryBooks(categoryBooks: CreateCategoryBooksDto) {
    const newCategoryBooks = this.categoryBooksRepository.create(categoryBooks);
    await this.categoryBooksRepository.save(newCategoryBooks);
    return 'Categoría  creada exitosamente';
  }

  async getCategoryBooks() {
    return this.categoryBooksRepository.find();
  }

  async getCategoryBookss(id: number) {
    const categoryBooksFound = await this.categoryBooksRepository.findOne({
      where: {
          id,
      },
    });
    if (!categoryBooksFound) {
      throw new HttpException('Categoría no encontrada', HttpStatus.NOT_FOUND);
    }
    return categoryBooksFound;
  }

  async deleteCategoryBooks(id: number) {
    const result = await this.categoryBooksRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException('Categoría no encontrada', HttpStatus.NOT_FOUND);
    }
    return 'Categoría eliminada correctamente';
  }

  async updateCategoryBooks(id: number, categoryBooks: UpdateCategoryBooksDto) {
    await this.getCategoryBookss(id); 
    await this.categoryBooksRepository.update(id, categoryBooks);
    return 'Categoría actualizada correctamente';
  }
}
