import { ApiProperty } from '@nestjs/swagger';
import {IsEmail, IsNotEmpty, IsString, Length} from 'class-validator';

export class UpdateUserDto {
    @ApiProperty({ example: 'user@test.test', description: 'User email' })
    @IsString({ message: 'Email must be string' })
    @IsEmail({}, { message: 'Email is not valid' })
    readonly email: string;

    @ApiProperty({ example: '123456', description: 'User password' })
    @IsString({ message: 'Password must be string' })
    @Length(6, 16, {
        message:
            'Password must be at least 6 characters in length and not more 16 characters',
    })
    readonly password: string;
}