import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Course } from "./courses.entity";
import { CoursesService } from "./courses.service";
import { CourseController } from './courses.controller';

@Module(
  {
    imports: [
      TypeOrmModule.forFeature([Course])
    ],
    controllers: [CourseController],
    providers: [CoursesService]
  }
)

export class CourseModule { }