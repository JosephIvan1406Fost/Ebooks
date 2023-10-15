import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString({ message: 'El título debe ser escrito en formato texto' })
  title?: string;

  @IsOptional()
  @IsString({ message: 'La descripción debe ser escrita en formato texto' })
  description?: string;

  @IsOptional()
  @IsInt({ message: 'El número de páginas debe ser un número entero' })
  pages?: number;

  @IsOptional()
  @IsInt({ message: 'El ID del autor debe ser un número entero' })
  authorid?: number;

  @IsOptional()
  @IsInt({ message: 'El ID de la categoría debe ser un número entero' })
  categoryid?: number;
}
