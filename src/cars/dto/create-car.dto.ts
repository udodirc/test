import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString} from "class-validator";

export class CreateCarDto {
    @ApiProperty({ example: 'Car 1', description: 'Car name' })
    @IsNotEmpty()
    @IsString({ message: 'Name must be string' })
    readonly name: string;

    @ApiProperty({ example: '888 AB', description: 'Car number plate' })
    @IsString({ message: 'Number must be string' })
    readonly number: string;
}