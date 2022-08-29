import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { UserRoles } from '../roles/user-roles.model';
import { Role } from '../roles/roles.model';
import { Post } from '../posts/posts.model';

interface UserCreationAttr {
  email;
  password;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttr> {
  @ApiProperty({ example: '1', description: 'User ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'user@test.test', description: 'User email' })
  @Column({ type: DataType.STRING, unique: true, allowNull: null })
  email: string;

  @ApiProperty({ example: '123456', description: 'User password' })
  @Column({ type: DataType.STRING, allowNull: null })
  password: string;

  @ApiProperty({ example: 'true', description: 'User ban' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: 'abuse', description: 'Ban reason' })
  @Column({ type: DataType.STRING, defaultValue: true })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Post)
  posts: Post[];
}
