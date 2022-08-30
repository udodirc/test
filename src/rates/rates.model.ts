import {
    Column,
    DataType,
    Model,
    Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface RateCreationAttr {
    day: number;
    percentage: number;
}

@Table({ tableName: 'rates' })
export class Rate extends Model<Rate, RateCreationAttr> {
    @ApiProperty({ example: '1', description: 'Cars ID' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: '5', description: 'Rent days rate' })
    @Column({ type: DataType.INTEGER})
    day: number;

    @ApiProperty({ example: '5', description: 'Rate days percentage' })
    @Column({ type: DataType.INTEGER})
    percentage: number;
}