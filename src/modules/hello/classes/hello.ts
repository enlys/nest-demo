import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}

export class Hello {
  @ApiProperty({ example: '11111', description: 'The id of the Hello' })
  id: string;
}
