import {
  Body,
  Controller, Param,
  Post, Put, Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from "./dto/update-post.dto";
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Post as Postmodel } from "../posts/posts.model";

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @ApiOperation({ summary: 'Create post' })
  @ApiResponse({ status: 200, type: Postmodel })
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() dto: CreatePostDto, @UploadedFile() image) {
    return this.postService.create(dto, image);
  }

  @ApiOperation({ summary: 'Show post' })
  @ApiResponse({ status: 200, type: Postmodel })
  @Post('/:id')
  show(@Param('id') id: number) {
    return this.postService.show(id);
  }

  @ApiOperation({ summary: 'Update post' })
  @ApiResponse({ status: 200, type: Postmodel })
  @Put('/:id')
  update(@Param('id') id: number, @Body() dto: UpdatePostDto) {
    return this.postService.update(id, dto);
  }

  @ApiOperation({ summary: 'Delete post' })
  @ApiResponse({ status: 200 })
  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.postService.delete(id);
  }
}
