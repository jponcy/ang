import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbqModule } from './bbq/bbq.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BbqModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './dist/database.db',
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
