import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({ example: 'admin', description: 'User role' })
  @IsNotEmpty()
  @IsString({ message: 'Value must be string' })
  readonly value: string;

  @ApiProperty({ example: 'admin role', description: 'User role description' })
  @IsNotEmpty()
  @IsString({ message: 'Value must be string' })
  readonly description: string;
}
