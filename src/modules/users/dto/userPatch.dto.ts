import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  MaxLength,
  IsOptional,
  IsDate,
  IsPhoneNumber,
  IsString,
  IsBoolean,
  IsDateString,
} from 'class-validator';

export class UserPatchDto {
  @IsNotEmpty()
  @MaxLength(64)
  @ApiProperty({ description: 'User name', nullable: false })
  name: string;

  @IsNotEmpty()
  @MaxLength(64)
  @ApiProperty({ description: 'User surname', nullable: false })
  surName: string;

  @IsNotEmpty()
  @MaxLength(130)
  @ApiProperty({ description: 'User full name', nullable: false })
  fullName: string;

  @IsOptional()
  @IsDateString()
  @ApiProperty({ description: 'User birthday', nullable: true })
  birthDate?: Date;

  @IsOptional()
  @IsPhoneNumber('RU')
  @ApiProperty({ description: 'User phone', nullable: true })
  telephone?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'User employment', nullable: true })
  employment?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ description: 'User agreement', nullable: true })
  userAgreement?: boolean;
}
