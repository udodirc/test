import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Car } from "./cars.model";
import { CreateCarDto } from "./dto/create-car.dto";
import { RentCarDto } from "./dto/rent-car.dto";
import { RentCar } from "./rent-car.model";
import { RatesService } from "../rates/rates.service";
import { Rate } from "../rates/rates.model";
import * as moment from 'moment';
import { Op } from "sequelize";
import { Sequelize } from "sequelize-typescript";

@Injectable()
export class CarsService {
    constructor(
        @InjectModel(Car) private carsRepository: typeof Car,
        @InjectModel(RentCar) private rentCarRepository: typeof RentCar,
        private rateService: RatesService
    ) {}

    async create(dto: CreateCarDto): Promise<Car> {
        return this.carsRepository.create({ ...dto });
    }

    async rent(dto: RentCarDto): Promise<RentCar> {
        const dayDiff = moment(dto.rent_end).diff(dto.rent_start, 'day');

        const rates = await this.getAllRates();
        const ratesArr = this.formRates(rates);
        const amount = this.calculateAmount(ratesArr, dayDiff);
        dto.amount = amount;

        await this.checkCarIsRented(dto.carID, dto.rent_start, dto.rent_end);

        return  await this.rentCarRepository.create(dto);
    }

    async getAllRates(): Promise<Rate[]>{
        return this.rateService.all();
    }

    async checkCarIsRented(cardID:number, rentStart:Date, rentEnd:Date):Promise<boolean>{
        const rentStartDate = rentStart.toString();
        const { Op } = require("sequelize");
        const rent = await this.rentCarRepository.findOne({
            where: {
                [Op.or]: [{
                    rent_start: {
                        [Op.between]: [rentStart, rentEnd]
                    }
                }, {
                    rent_end: {
                        [Op.between]: [rentStart, rentEnd]
                    }
                },

                    Sequelize.literal('"RentCar"."rent_end" + INTERVAL \'3d\' >= ' + "'" + rentStartDate + "'")
                ],
                [Op.and]: [{
                    carID: cardID
                }]
            }
        });

        if(rent){
            throw new HttpException('Car is rented', HttpStatus.BAD_REQUEST);
        }

        return true;
    }

    private calculateAmount(rates: {}, dayDiff: number): number{
        const baseRate = 1000;
        let result = 0;
        let switchRate = false;
        let percentage = 0;

        for (let i = 1; i <= dayDiff; i++) {
            if(rates[i]){
                switchRate = true;
                percentage = rates[i];
                result+= baseRate - (baseRate / 100) * percentage;
            } else if (switchRate) {
                result+= baseRate - (baseRate / 100) * percentage;
            } else {
                result+= baseRate;
            }
        }

        return result;
    }

    private formRates(rates: Rate[]): {} {
        let result = {};

        for (const ratesKey in rates) {
            result[rates[ratesKey]['day']] = rates[ratesKey]['percentage'];
        }

        return result;
    }
}
