import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {
  @ApiProperty({ example: '4', description: 'User ID' })
  @IsNotEmpty()
  @IsNumber({}, { message: 'userID must be number' })
  readonly userID: number;

  @ApiProperty({ example: 'abuse', description: 'User ban reason' })
  @IsNotEmpty()
  @IsString({ message: 'Value must be string' })
  readonly banReason: string;
}
