import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'yup';

@Injectable()
export class PayloadValidatorPipe implements PipeTransform {
  constructor(private schema: ObjectSchema<any>) {}

  transform(value: any) {
    try {
      this.schema.validateSync(value);
    } catch (err) {
      const [firstError] = err.errors;
      throw new BadRequestException(firstError);
    }
    return value;
  }
}
