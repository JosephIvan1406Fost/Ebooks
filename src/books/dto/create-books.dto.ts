import { IsString, IsInt, IsOptional, IsArray, ArrayMinSize } from 'class-validator';

export class CreateBookDto {
    @IsString({ message: 'El título debe ser escrito en formato texto' })
    title: string;
  
    @IsString({ message: 'La descripción debe ser escrita en formato texto' })
    description: string;
  
    @IsInt({ message: 'El número de páginas debe ser un número entero' })
    pages: number;
  
    @IsInt({ message: 'El ID del autor debe ser un número entero' })
    authorid: number;
  
    @IsInt({ message: 'El ID de la categoría debe ser un número entero' })
    categoryid: number;
  
}
