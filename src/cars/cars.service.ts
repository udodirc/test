import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Car } from "./cars.model";
import { CreateCarDto } from "./dto/create-car.dto";
import { RentCarDto } from "./dto/rent-car.dto";
import { RentCar } from "./rent-car.model";

@Injectable()
export class CarsService {
    constructor(
        @InjectModel(Car) private carsRepository: typeof Car,
        @InjectModel(RentCar) private rentCarRepository: typeof RentCar,
    ) {}

    async create(dto: CreateCarDto): Promise<Car> {
        return this.carsRepository.create({ ...dto });
    }

    async rent(dto: RentCarDto) {
        const startDate = this.convertStringToDate(dto.rent_start);
        const endDate = this.convertStringToDate(dto.rent_end);
        console.log(startDate);
        console.log(endDate);
        const dayDiff = this.getDayDiff(startDate, endDate);
        console.log(dayDiff);
        //return this.rentCarRepository.create({ ...dto });
    }

    private convertStringToDate(date:string): Date{
        const [day, month, year] = date.split('-');
        return new Date(+year, +month - 1, +day);
    }

    private getDayDiff(startDate: Date, endDate: Date): number {
        const msInDay = 24 * 60 * 60 * 1000;

        return Math.round(Math.abs(Number(endDate) - Number(startDate)) / msInDay);
    }
}
