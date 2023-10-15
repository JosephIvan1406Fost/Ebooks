import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorsDto } from './dto/create-authors.dto';
import { UpdateAuthorsDto } from './dto/update-authors.dto'; 

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  getAuthors() {
    return this.authorsService.getAuthors();
  }

  @Get(':id')
  getAuthorss(@Param('id') id: number) {
    return this.authorsService.getAuthorss(id);
  }

  @Post()
  createAuthors(@Body() newAuthors: CreateAuthorsDto) {
    return this.authorsService.createAuthors(newAuthors);
  }

  @Delete(':id')
  deleteAuthors(@Param('id') id: number) {
    return this.authorsService.deleteAuthors(id);
  }

  @Patch(':id')
  updateAuthors(@Param('id') id: number, @Body() authors: UpdateAuthorsDto) {
    return this.authorsService.updateAuthors(id, authors);
  }
}
