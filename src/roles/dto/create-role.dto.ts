import { IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString({ message: 'Value must be string' })
  readonly value: string;

  @IsString({ message: 'Value must be string' })
  readonly description: string;
}
