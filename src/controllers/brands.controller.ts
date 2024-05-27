import { Controller, Get } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get('')
  newendponit() {
    return 'soy brand';
  }
}
