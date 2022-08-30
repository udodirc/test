import { Body, Controller, Post } from '@nestjs/common';
import { CarsService } from "./cars.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Car } from "./cars.model";
import { CreateCarDto } from "./dto/create-car.dto";
import { RentCar } from "./rent-car.model";
import { RentCarDto } from "./dto/rent-car.dto";

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
    constructor(private carsService: CarsService){}

    @ApiOperation({ summary: 'Create car' })
    @ApiResponse({ status: 200, type: Car })
    @Post()
    create(@Body() dto: CreateCarDto) {
        return this.carsService.create(dto);
    }

    @ApiOperation({ summary: 'Rent car' })
    @ApiResponse({ status: 200, type: RentCar })
    @Post('/rent-car')
    rent(@Body() dto: RentCarDto) {
        return this.carsService.rent(dto);
    }
}
