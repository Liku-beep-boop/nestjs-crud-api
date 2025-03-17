import { Body, Injectable, Post } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRecipeDto: CreateRecipeDto) {
  return this.prisma.recipe.create({
    data: createRecipeDto,
  });
}

  async findAll() {
    return this.prisma.recipe.findMany();
  }

  findOne(id: number) {
    return this.prisma.recipe.findUnique({
      where: { id },
    });
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
