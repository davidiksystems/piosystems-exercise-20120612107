/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cm12u021hbls73adboq0-a.oregon-postgres.render.com',
      // url: 'mysql://root:root@localhost:3303/apoowo',
      port: 3306,
      username: 'silmsteam',
      password: 'hkjW4V9LJ3DSUNxUHMviYlhZ5cys66WS',
      database: 'hms',
      synchronize: true,
      autoLoadEntities: true,
      // entities: ["dist/**/*.entity{.ts,.js}"],
    }),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
