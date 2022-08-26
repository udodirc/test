import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@test.test', description: 'User email' })
  readonly email: string;

  @ApiProperty({ example: '123456', description: 'User password' })
  readonly password: string;
}
