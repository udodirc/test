import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber} from "class-validator";

export class UpdateRateDto{
    @ApiProperty({ example: '5', description: 'Rate days' })
    @IsNotEmpty()
    @IsNumber({},{ message: 'Day must be number' })
    readonly day: number;

    @ApiProperty({ example: '5', description: 'Rate days percentage' })
    @IsNotEmpty()
    @IsNumber({},{ message: 'Percentage must be number' })
    readonly percentage: number;
}