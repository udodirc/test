import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString} from "class-validator";

export class CreatePostDto {
  @ApiProperty({ example: 'Title', description: 'Post title' })
  @IsNotEmpty()
  @IsString({ message: 'Title must be string' })
  readonly title: string;

  @ApiProperty({ example: 'Content', description: 'Post content' })
  @IsNotEmpty()
  @IsString({ message: 'Content must be string' })
  readonly content: string;

  @ApiProperty({ example: 4, description: 'User ID' })
  @IsNotEmpty()
  userID: number;
}
