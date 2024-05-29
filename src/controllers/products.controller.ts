import {
  Controller,
  //Query,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('')
  getProducts() {
    // @Query('brand') brand: string, // @Query('offset') offset = 0, // @Query('limit') limit = 100,
    // return {
    //   message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    // return {
    //   message: `product ${productId}`,
    // };
    return this.productsService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: any) {
    // return { message: 'entrar nuevo producto', payload };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.upDate(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
