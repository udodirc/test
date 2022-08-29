import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.model';

interface PostCreationAttr {
  title: string;
  content: string;
  userID: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttr> {
  @ApiProperty({ example: '1', description: 'Post ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Titles', description: 'Post title' })
  @Column({ type: DataType.STRING, allowNull: null })
  title: string;

  @ApiProperty({ example: 'Text', description: 'Post content' })
  @Column({ type: DataType.STRING, allowNull: null })
  content: string;

  @Column({ type: DataType.STRING })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userID: number;

  @BelongsTo(() => User)
  author: User;
}
