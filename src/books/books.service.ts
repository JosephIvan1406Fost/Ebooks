import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Books } from 'src/books/books.entity'; 
import { CreateBookDto } from './dto/create-books.dto'; 
import { UpdateBookDto } from './dto/update-books.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books)
    private booksRepository: Repository<Books>,
  ) {}

  async createBook(books: CreateBookDto) {
    const newBook = this.booksRepository.create(books);
    await this.booksRepository.save(newBook);
    return 'Libro creado exitosamente';
  }

  async getBooks() {
    return this.booksRepository.find();
  }

  async getBook(id: number) {
    const bookFound = await this.booksRepository.findOne({
      where: { id },
      relations: ['author', 'category'],
    });
    if (!bookFound) {
      throw new HttpException('Libro no encontrado', HttpStatus.NOT_FOUND);
    }
    return bookFound;
  }
  

  async deleteBook(id: number) {
    const result = await this.booksRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException('Libro no encontrado', HttpStatus.NOT_FOUND);
    }
    return 'Libro eliminado correctamente';
  }

  async updateBook(id: number, books: UpdateBookDto) {
    await this.getBook(id);
    await this.booksRepository.update(id, books);
    return 'Libro actualizado correctamente';
  }
}
