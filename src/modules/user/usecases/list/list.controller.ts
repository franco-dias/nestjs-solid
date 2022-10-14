import { Controller, Get } from '@nestjs/common';

import { ListUsersService } from './list.service';

@Controller('/users')
export class ListUsersController {
  constructor(private listUsersService: ListUsersService) {}

  @Get()
  listUsers() {
    return this.listUsersService.execute();
  }
}
