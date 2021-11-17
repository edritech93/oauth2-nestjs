import { IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;
}
