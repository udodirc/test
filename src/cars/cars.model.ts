import {
    Column,
    DataType,
    Model,
    Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface CarCreationAttr {
    name: string;
    number_plate: string;
}

@Table({ tableName: 'cars' })
export class Car extends Model<Car, CarCreationAttr> {
    @ApiProperty({ example: '1', description: 'Cars ID' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'Car 1', description: 'Car name' })
    @Column({ type: DataType.STRING})
    name: string;

    @ApiProperty({ example: '888 AB', description: 'Car number plate' })
    @Column({ type: DataType.STRING, allowNull: null})
    number_plate: string;
}