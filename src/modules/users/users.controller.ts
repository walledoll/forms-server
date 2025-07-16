import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Response,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBasicAuth,
  ApiCookieAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { IUserCreateResponse } from './users.interface';
import { UserCreateDto } from './dto/userCreate.dto';
import { UserGetDto } from './dto/userGet.dto';
import { AuthGuard } from '../auth/auth.guard';

@ApiBasicAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Get list of users' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', isArray: true })
  @Get()
  getAll(): UserGetDto[] {
    return this.usersService.getAll();
  }

  @UseGuards(AuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiCreatedResponse({
    description: 'Success',
  })
  createUser(@Body() data: UserCreateDto): IUserCreateResponse {
    return this.usersService.createUser(data);
  }

  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Delete user' })
  @Delete(':id')
  deleteUser(@Param('id') id: string): string {
    this.usersService.deleteUser(id);
    return 'Ok';
  }
}
