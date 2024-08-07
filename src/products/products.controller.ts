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
import { UpdateProductDto } from './dto/updateProduct.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post('/create_product')
  createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<{ product: Products }> {
    return this.productService.createProduct(createProductDto);
  }

  @Get()
  getAllProducts(): Promise<Products[]> {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string): Promise<Products> {
    return this.productService.getProductById(id);
  }

  @Patch('/update_product/:id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Products> {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Delete('/delete_product/:id')
  deleteProduct(
    @Param('id') id: string,
    createProductDto: CreateProductDto,
  ): Promise<Products> {
    return this.productService.deleteProduct(id);
  }
}
