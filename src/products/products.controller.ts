import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/createProduct.dto';
import { Products } from './schema/products.schema';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('products')
export class ProductsController {
  constructor(private readonly productServie: ProductsService) {}

  @Post('create_product')
  createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<{ product: Products }> {
    return this.productServie.createProduct(createProductDto);
  }

  @Get()
  getAllProducts(@Query() query: ExpressQuery): Promise<Products[]> {
    return this.productServie.getAllProducts(query);
  }

  @Get(':id')
  getProduct(@Param('id') id: string): Promise<Products> {
    return this.productServie.getProduct(id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: CreateProductDto,
  ): Promise<Products> {
    return this.productServie.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): Promise<Products> {
    return this.productServie.deleteProduct(id);
  }
}
