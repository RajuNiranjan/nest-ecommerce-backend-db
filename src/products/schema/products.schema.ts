import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Products {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  originalPrice: number;

  @Prop({ required: true })
  offerPrice: number;

  @Prop({ type: [String], enum: ['S', 'M', 'L', 'XL', 'XXL'], required: true })
  sizes: string[];

  @Prop({ required: true })
  material: string;

  @Prop({ required: true, type: [String] })
  imageUrl: string[];
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
