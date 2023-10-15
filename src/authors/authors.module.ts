import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Authors } from './authors.entity';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';

@Module({
  imports: [TypeOrmModule.forFeature([Authors])],
  controllers: [AuthorsController],
  providers: [AuthorsService]
})
export class AuthorsModule {}



