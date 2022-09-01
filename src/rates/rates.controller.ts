import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { RatesService } from "./rates.service";
import { Rate } from "./rates.model";
import { CreateRateDto } from "./dto/create-rate.dto";
import { UpdateRateDto } from "./dto/update-rate.dto";

@ApiTags('Rates')
@Controller('rates')
export class RatesController {
    constructor(private rateService: RatesService){}

    @ApiOperation({ summary: 'Get all rates' })
    @ApiResponse({ status: 200, type: [Rate] })
    @Get()
    index() {
        return this.rateService.all();
    }

    @ApiOperation({ summary: 'Create rate' })
    @ApiResponse({ status: 200, type: Rate })
    @Post()
    create(@Body() dto: CreateRateDto){
        return this.rateService.create(dto);
    }

    @ApiOperation({ summary: 'Show rate' })
    @ApiResponse({ status: 200, type: Rate})
    @Post('/:id')
    show(@Param('id') id: number) {
        return this.rateService.show(id);
    }

    @ApiOperation({ summary: 'Update rate' })
    @ApiResponse({ status: 200, type: Rate })
    @Put('/:id')
    update(@Param('id') id: number, @Body() dto: UpdateRateDto) {
        return this.rateService.update(id, dto);
    }

    @ApiOperation({ summary: 'Delete rate' })
    @ApiResponse({ status: 200 })
    @Delete('/:id')
    delete(@Param('id') id: number) {
        return this.rateService.delete(id);
    }
}
