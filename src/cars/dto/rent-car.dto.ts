import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString} from "class-validator";

export class RentCarDto {
    @ApiProperty({ example: '2022-04-03', description: 'Start rent date' })
    @IsNotEmpty()
    @IsString({ message: 'Start rent date must be string' })
    rent_start: Date;

    @ApiProperty({ example: '2022-04-18', description: 'End rent date' })
    @IsNotEmpty()
    @IsString({ message: 'End rent date must be string' })
    rent_end: Date;

    @ApiProperty({ example: 4, description: 'Car ID' })
    @IsNotEmpty()
    @IsNumber()
    carID: number;

    amount: number;
}