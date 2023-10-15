import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { BooksService } from './books.service'; 
import { CreateBookDto } from './dto/create-books.dto'; 
import { UpdateBookDto } from './dto/update-books.dto';

@Controller('books') 
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks() {
    return this.booksService.getBooks();
  }

  @Get(':id')
  getBook(@Param('id') id: number) {
    return this.booksService.getBook(id);
  }

  @Post()
  createBook(@Body() newBook: CreateBookDto) {
    return this.booksService.createBook(newBook);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: number) {
    return this.booksService.deleteBook(id);
  }

  @Patch(':id')
  updateBook(@Param('id') id: number, @Body() book: UpdateBookDto) {
    return this.booksService.updateBook(id, book);
  }
}
