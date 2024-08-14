import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from './schema/products.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/createProduct.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name) readonly productModel: Model<Products>,
  ) {}

  async createProduct(
    createProductDto: CreateProductDto,
  ): Promise<{ product: Products }> {
    if (!createProductDto) {
      throw new BadRequestException('All fields are required.');
    }

    try {
      const newProduct = await this.productModel.create(createProductDto);
      return { product: newProduct };
    } catch (error) {
      console.error('Error creating product:', error);
      throw new BadRequestException(
        'Failed to create product, please check the provided data.',
      );
    }
  }
}
