import { Controller, Param, Get } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('')
  newendponit() {
    return 'soy category';
  }
  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
}
