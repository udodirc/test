import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Car } from "./cars.model";
import { RentCar } from "./rent-car.model";
import { RatesModule } from "../rates/rates.module";

@Module({
  providers: [CarsService],
  controllers: [CarsController],
  imports: [
      SequelizeModule.forFeature([Car, RentCar]),
      RatesModule
  ]
})
export class CarsModule {}
