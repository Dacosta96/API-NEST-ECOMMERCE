import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get('')
  newendponit() {
    return 'soy order';
  }
}
