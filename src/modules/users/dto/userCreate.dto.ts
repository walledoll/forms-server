import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class UserCreateDto {
  @IsNotEmpty()
  @MaxLength(64)
  @ApiProperty({ description: 'User name', nullable: false })
  name: string;

  @IsNotEmpty()
  @MaxLength(64)
  @ApiProperty({ description: 'User surname', nullable: false })
  surName: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ description: 'User email', nullable: false })
  email: string;

  @IsOptional()
  @IsDate()
  @ApiProperty({ description: 'User birthday', nullable: true })
  birthDate?: Date;

  @IsOptional()
  @IsPhoneNumber()
  @ApiProperty({ description: 'User phone', nullable: true })
  telephone?: string;

  @IsString()
  @ApiProperty({ description: 'User employment', nullable: true })
  employment?: string;

  @IsBoolean()
  @ApiProperty({ description: 'User agreement', nullable: true })
  userAgreement?: boolean;
}
