import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from './schema/products.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/createProduct.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name) private readonly productModel: Model<Products>,
  ) {}

  async createProduct(
    createProductDto: CreateProductDto,
  ): Promise<{ product: Products }> {
    const {
      name,
      description,
      offerPrice,
      originalPrice,
      imageUrl,
      sizes,
      material,
    } = createProductDto;

    if (
      !name ||
      !description ||
      !originalPrice ||
      !offerPrice ||
      !sizes ||
      !imageUrl ||
      !material
    ) {
      throw new UnauthorizedException('All fields are required');
    }

    try {
      const product = await this.productModel.findOne({ name });
      if (product) {
        throw new UnauthorizedException('product already existed');
      }

      const newProduct = await this.productModel.create(createProductDto);

      return { product: newProduct };
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException(error);
    }
  }

  async getAllProducts(): Promise<Products[]> {
    return await this.productModel.find();
  }
}
