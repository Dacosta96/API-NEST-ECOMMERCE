import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('')
  newendponit() {
    return 'soy user';
  }
}
