import { IsString, IsOptional } from 'class-validator';

export class UpdateAuthorsDto {
  @IsOptional()
  @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
  name?: string;

  @IsOptional()
  @IsString({ message: 'El primer nombre debe ser una cadena de caracteres' })
  firstname?: string;

  @IsOptional()
  @IsString({ message: 'El apellido debe ser una cadena de caracteres' })
  lastname?: string;
}
