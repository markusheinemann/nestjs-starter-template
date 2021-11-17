import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { PrismaModule } from './providers/prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [configuration] }), PrismaModule],
})
export class AppModule {}
