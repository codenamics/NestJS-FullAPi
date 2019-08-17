import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UsePipes,
} from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';
import { ValidationPipe } from '../shared/validation.pipe';

@Controller('idea')
export class IdeaController {
  constructor(private ideaService: IdeaService) {}
  @Get()
  async showAllIdeas() {
    return await this.ideaService.showAll();
  }
  @Post()
  @UsePipes(new ValidationPipe())
  async createIdea(@Body() data: IdeaDTO) {
    return await this.ideaService.create(data);
  }
  @Get(':id')
  async readIdea(@Param('id') id: string) {
    return this.ideaService.read(id);
  }
  @Put(':id')
  @UsePipes(new ValidationPipe())
  async updateIdea(@Param('id') id: string, @Body() data: Partial<IdeaDTO>) {
    return await this.ideaService.update(id, data);
  }
  @Delete(':id')
  async destroyIdea(@Param('id') id: string) {
    return await this.ideaService.destroy(id);
  }
}
