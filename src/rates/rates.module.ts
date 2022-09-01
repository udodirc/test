import { Module } from '@nestjs/common';
import { RatesService } from './rates.service';
import { RatesController } from './rates.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Rate } from "./rates.model";

@Module({
  providers: [RatesService],
  controllers: [RatesController],
  imports: [SequelizeModule.forFeature([Rate])],
  exports: [RatesService]
})
export class RatesModule {}
