import { Body, Controller, Post } from '@nestjs/common';
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
}
