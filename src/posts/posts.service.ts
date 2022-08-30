import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from '../files/files.service';
import { UpdatePostDto } from "./dto/update-post.dto";

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
    private fileService: FilesService,
  ) {}

  async create(dto: CreatePostDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    dto.userID = +dto.userID;
    const post = this.postRepository.create({ ...dto, image: fileName });

    return post;
  }

  async show(id: number) {
    const post = await this.postRepository.findByPk(id);

    if (!post) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    return post;
  }

  async update(id: number, dto: UpdatePostDto) {

    const post = await this.postRepository.findByPk(id);

    if (!post) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    post.title = dto.title;
    post.content = dto.content;
    await post.save();

    return post;
  }

  async delete(id: number) {
    const post = await this.postRepository.findByPk(id);

    if (!post) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    return await this.postRepository.destroy({
      where: {
        id: id
      }
    });
  }
}
