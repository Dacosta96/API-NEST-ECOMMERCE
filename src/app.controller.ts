import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newendponit() {
    return 'soy nuevo';
  }
  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }
}
