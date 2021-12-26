import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  Headers,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { ApiQuery, ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';
import { HelloService } from './hello.service';
import { Hello } from './classes/hello';
import { CreateCatDto } from './dto/create-hello.dto';
import { ValidationPipe } from '../../common/pipes/validate.pipe';
import { Roles } from '../../common/decorator/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';

@Controller('hello')
@UseGuards(RolesGuard)
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  // 查询
  @Get()
  @Roles('admin')
  @ApiQuery({ name: 'id', required: false })
  @ApiResponse({
    status: 200,
    description: 'get ...',
    type: Hello,
  })
  hello(@Query() { id }): string {
    return this.helloService.fetch(id);
  }

  // 增加
  @Post()
  // @UsePipes(new JoiValidationPipe(createSchema))
  @UsePipes(new ValidationPipe())
  @ApiBody({ description: '请输入message' })
  save(@Body() createDto: CreateCatDto): string {
    return this.helloService.save(createDto);
  }

  // 更新
  @Patch(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ description: '填写更新内容' })
  patch(@Param() { id }, @Body() { message }): string {
    return this.helloService.update(id, message);
  }

  // 删除
  @Delete()
  @ApiQuery({ name: 'id', required: false })
  delete(@Query() { id }): string {
    return this.helloService.remove(id);
  }
}
