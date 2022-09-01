import {
    BelongsTo,
    Column,
    DataType, ForeignKey,
    Model,
    Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from "sequelize";
import { Car } from "./cars.model";

interface RentCarCreationAttr {
    carID: number;
    rent_start: Date;
    rent_end: Date;
    amount: number;
}

@Table({ tableName: 'rent_car' })
export class RentCar extends Model<RentCar, RentCarCreationAttr> {
    @ApiProperty({ example: '1', description: 'Rent car ID' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: '23-04-2022', description: 'Start rent date' })
    @Column({ type: DataTypes.DATEONLY })
    rent_start: Date;

    @ApiProperty({ example: '23-05-2022', description: 'End rent date' })
    @Column({ type: DataTypes.DATEONLY })
    rent_end: Date;

    @ApiProperty({ example: '11.90', description: 'Total rent amount' })
    @Column({ type: DataTypes.FLOAT })
    amount: number;

    @ForeignKey(() => Car)
    @Column({ type: DataType.INTEGER })
    carID: number;

    @BelongsTo(() => Car)
    car: Car;
}