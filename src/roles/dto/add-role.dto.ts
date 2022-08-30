import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDto {
  @ApiProperty({ example: 'admin', description: 'User role' })
  @IsNotEmpty()
  @IsString({ message: 'Value must be string' })
  readonly value: string;

  @ApiProperty({ example: '4', description: 'User ID' })
  @IsNotEmpty()
  @IsNumber({}, { message: 'userID must be number' })
  readonly userID: number;
}
