import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Response,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import {
  IUserCreateResponse,
  IUsersData,
  TUsersCreateRequest,
} from './users.interface';
import { UserCreateDto } from './dto/userCreate.dto';
import { UserGetDto } from './dto/userGet.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Get list of users' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', isArray: true })
  @Get()
  getAll(): UserGetDto[] {
    return this.usersService.getAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiCreatedResponse({
    description: 'Success',
  })
  createUser(@Body() data: UserCreateDto): IUserCreateResponse {
    return this.usersService.createUser(data);
  }

  @ApiOperation({ summary: 'Delete user' })
  @Delete(':id')
  deleteUser(@Param('id') id: string): string {
    this.usersService.deleteUser(id);
    return 'Ok';
  }
}
