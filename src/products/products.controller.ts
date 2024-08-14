import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/createProduct.dto';
import { Products } from './schema/products.schema';

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
  getAllProducts(): Promise<Products[]> {
    return this.productServie.getAllProducts();
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
