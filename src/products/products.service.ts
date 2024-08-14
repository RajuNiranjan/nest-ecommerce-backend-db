import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from './schema/products.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/createProduct.dto';
import { Query } from 'express-serve-static-core';

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

  async getAllProducts(query: Query): Promise<Products[]> {
    const keyword = query.keyword
      ? {
          name: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};

    return await this.productModel.find(keyword).exec();
  }

  async getProduct(id: string): Promise<Products> {
    const product = await this.productModel.findById(id);
    if (!product) {
      throw new BadRequestException('Product not found.');
    }
    return product;
  }

  async updateProduct(
    id: string,
    updateProductDto: CreateProductDto,
  ): Promise<Products> {
    const product = await this.productModel.findByIdAndUpdate(
      id,
      updateProductDto,
      { new: true },
    );
    if (!product) {
      throw new BadRequestException('Product not found.');
    }
    return product;
  }

  async deleteProduct(id: string): Promise<Products> {
    const product = await this.productModel.findByIdAndDelete(id);
    if (!product) {
      throw new BadRequestException('Product not found.');
    }
    return product;
  }
}
