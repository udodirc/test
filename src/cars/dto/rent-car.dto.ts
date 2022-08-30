import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString} from "class-validator";

export class RentCarDto {
    @ApiProperty({ example: '03-04-2022', description: 'Start rent date' })
    @IsNotEmpty()
    @IsString({ message: 'Name must be string' })
    readonly rent_start: string;

    @ApiProperty({ example: '18-04-2022', description: 'End rent date' })
    @IsNotEmpty()
    @IsString({ message: 'Name must be string' })
    readonly rent_end: string;
}