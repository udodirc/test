import { IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @IsNumber({}, { message: 'userID must be number' })
  readonly userID: number;

  @IsString({ message: 'Value must be string' })
  readonly banReason: string;
}
