import { IsString, IsEmpty } from 'class-validator';

export class IdeaDTO {
  @IsString()
  idea: string;
  @IsString()
  description: string;
}
