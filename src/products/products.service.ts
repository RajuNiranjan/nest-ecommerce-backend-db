import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from './schema/products.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';

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

  async getProductById(id: string): Promise<Products> {
    try {
      const product = await this.productModel.findById(id);
      if (!product) {
        throw new UnauthorizedException('item not found');
      }
      return product;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException(error);
    }
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Products> {
    const product = await this.productModel.findById(id);

    if (!product) {
      throw new UnauthorizedException('item not found');
    }

    const {
      name,
      description,
      offerPrice,
      originalPrice,
      imageUrl,
      sizes,
      material,
    } = updateProductDto;

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
      const updateProduct = await this.productModel.findByIdAndUpdate(
        id,
        updateProductDto,
        { new: true },
      );

      return product;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException(error);
    }
  }

  async deleteProduct(id: string): Promise<Products> {
    try {
      const product = await this.productModel.findById(id);
      if (!product) {
        throw new UnauthorizedException('item not found');
      }
      return await this.productModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException(error);
    }
  }
}
