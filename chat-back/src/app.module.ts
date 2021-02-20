import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Course } from './courses/courses.entity';
import { CourseModule } from './courses/courses.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mongodb',
        host: 'localhost',
        database: 'test',
        // username: 'root',
        // password: 'admin',
        entities: [Course],
        synchronize: true,
        useUnifiedTopology: true
      }
    ),
    CourseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
