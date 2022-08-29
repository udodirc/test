import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'Value must be string' })
  readonly value: string;

  @IsNumber({}, { message: 'userID must be number' })
  readonly userID: number;
}
