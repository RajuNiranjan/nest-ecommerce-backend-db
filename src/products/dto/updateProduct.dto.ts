import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
} from 'class-validator';

export class UpdateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly originalPrice: number;

  @IsNotEmpty()
  @IsNumber()
  readonly offerPrice: number;

  @IsNotEmpty()
  @IsArray()
  @IsEnum(['S', 'M', 'L', 'XL', 'XXL'], { each: true })
  readonly sizes: string[];

  @IsNotEmpty()
  @IsString()
  readonly material: string;

  @IsNotEmpty()
  @IsArray()
  @IsUrl({}, { each: true })
  readonly imageUrl: string[];
}
