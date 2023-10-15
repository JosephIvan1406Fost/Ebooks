import { IsString, MinLength, IsNotEmpty } from 'class-validator';

export class CreateAuthorsDto {
  @IsString({ message: "El nombre debe ser una cadena de texto" })
  @IsNotEmpty({ message: "El nombre es obligatorio" })
  name: string;

  @IsString({ message: "El nombre debe ser una cadena de texto" })
  @IsNotEmpty({ message: "El apellido es obligatorio" })
  firstname: string;

  @IsString({ message: "El nombre debe ser una cadena de texto" })
  @IsNotEmpty({ message: "El apellido es obligatorio" })
  lastname: string;
  
}
