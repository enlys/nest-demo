import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus';

@Module({
  controllers: [HealthController],
  providers: [HealthCheckService],
})
export class HealthModule {}
