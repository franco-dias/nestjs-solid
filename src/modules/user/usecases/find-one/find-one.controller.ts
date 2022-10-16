import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FindOneService } from './find-one.service';

@ApiTags('Users')
@Controller('/users')
export class FindOneController {
  constructor(private findOneService: FindOneService) {}

  @Get('/:id')
  findUserById(@Param('id', ParseIntPipe) userId: number) {
    return this.findOneService.execute(userId);
  }
}
