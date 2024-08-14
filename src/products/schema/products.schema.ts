import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Size, Type } from './enums';

@Schema({ timestamps: true })
export class Products {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  fabric: string;

  @Prop({ required: true })
  original_price: number;

  @Prop({ required: true })
  offer_price: number;

  @Prop({ required: true })
  images: string[];

  @Prop({ required: true, enum: Object.values(Size), type: [String] })
  size: string[];

  @Prop({ required: true, enum: Object.values(Type) })
  type: string;

  @Prop({ default: false })
  isOnSale: boolean;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
