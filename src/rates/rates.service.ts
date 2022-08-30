import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Rate } from "./rates.model";
import { CreateRateDto } from "./dto/create-rate.dto";
import {UpdateRateDto} from "./dto/update-rate.dto";

@Injectable()
export class RatesService {
    constructor(
        @InjectModel(Rate) private rateRepository: typeof Rate
    ) {}

    async create(dto: CreateRateDto) {
        return  this.rateRepository.create(dto);
    }

    async show(id: number) {
        const rate = await this.rateRepository.findByPk(id);

        if (!rate) {
            throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
        }

        return rate;
    }

    async update(id: number, dto: UpdateRateDto) {

        const rate = await this.rateRepository.findByPk(id);

        if (!rate) {
            throw new HttpException('Rate not found', HttpStatus.NOT_FOUND);
        }

        rate.day = dto.day;
        rate.percentage = dto.percentage;
        await rate.save();

        return rate;
    }

    async delete(id: number) {
        const post = await this.rateRepository.findByPk(id);

        if (!post) {
            throw new HttpException('Rate not found', HttpStatus.NOT_FOUND);
        }

        return await this.rateRepository.destroy({
            where: {
                id: id
            }
        });
    }
}
