import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Size, Type } from '../schema/enums';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly original_price: number;

  @IsNotEmpty()
  @IsNumber()
  readonly offer_price: number;

  @IsNotEmpty()
  @IsString()
  @IsArray({ each: true })
  readonly images: string[];

  @IsNotEmpty()
  @IsArray()
  @IsEnum(Size, { each: true })
  readonly size: Size[];

  @IsNotEmpty()
  @IsEnum(Type)
  readonly type: Type;

  @IsNotEmpty()
  @IsBoolean()
  readonly isOnSale: boolean;

  @IsNotEmpty()
  @IsString()
  readonly userId: string;
}
