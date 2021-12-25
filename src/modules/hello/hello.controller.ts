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
} from '@nestjs/common';
import { ApiQuery, ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';
import { HelloService } from './hello.service';
import { Hello } from './classes/hello';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  // 查询
  @Get()
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
  @ApiParam({ name: 'id' })
  @ApiBody({ description: '请输入message' })
  save(@Body() { message }, @Headers('token') token): string {
    return this.helloService.save(message);
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
