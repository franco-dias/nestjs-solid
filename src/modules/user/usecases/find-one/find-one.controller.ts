import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { FindOneService } from './find-one.service';

@Controller('/users')
export class FindOneController {
  constructor(private findOneService: FindOneService) {}

  @Get('/:id')
  findUserById(@Param('id', ParseUUIDPipe) userId: string) {
    return this.findOneService.execute(userId);
  }
}
