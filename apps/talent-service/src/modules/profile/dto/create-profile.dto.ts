import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsNotEmpty()
  candidateId: number;

  @IsArray()
  @IsOptional()
  skills?: string[];

  @IsOptional()
  summary?: string;

  @IsArray()
  @IsOptional()
  experience: string[];

  @IsArray()
  @IsOptional()
  education: string[];

  @IsArray()
  @IsOptional()
  projects?: string[];

  @IsArray()
  @IsOptional()
  socialLinks?: string[];
}
