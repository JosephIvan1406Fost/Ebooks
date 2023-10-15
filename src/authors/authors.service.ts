import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Authors } from './authors.entity';
import { CreateAuthorsDto } from './dto/create-authors.dto';
import { UpdateAuthorsDto } from './dto/update-authors.dto'; 

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Authors)
    private authorsRepository: Repository<Authors>,
  ) {}

  async createAuthors(authors: CreateAuthorsDto) {
    const newAuthors = this.authorsRepository.create(authors);
    await this.authorsRepository.save(newAuthors);
    return 'Authors  creada exitosamente';
  }

  async getAuthors() {
    return this.authorsRepository.find();
  }

  async getAuthorss(id: number) {
    const authorsFound = await this.authorsRepository.findOne({
      where: {
          id,
      },
    });
    if (!authorsFound) {
      throw new HttpException('Author no encontrada', HttpStatus.NOT_FOUND);
    }
    return authorsFound;
  }

  async deleteAuthors(id: number) {
    const result = await this.authorsRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException('Author no encontrada', HttpStatus.NOT_FOUND);
    }
    return 'Author eliminado correctamente';
  }

  async updateAuthors(id: number, authors: UpdateAuthorsDto) {
    await this.getAuthorss(id); 
    await this.authorsRepository.update(id, authors);
    return 'Author actualizado correctamente';
  }
}
