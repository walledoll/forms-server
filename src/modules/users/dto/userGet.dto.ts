import { ApiProperty } from '@nestjs/swagger';
import { UserCreateDto } from './userCreate.dto';

export class UserGetDto extends UserCreateDto {
  @ApiProperty({ description: 'User id' })
  id: string;
}
