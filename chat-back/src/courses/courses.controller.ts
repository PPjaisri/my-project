import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCourseDto } from 'src/dto/create-course.dto';
import { Course } from './courses.entity';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CourseController {
  constructor(private coursesService: CoursesService) { }

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Post()
  async create(@Body() createCourseDto: CreateCourseDto) {
    const newCourse = this.coursesService.create(createCourseDto);
    return newCourse;
  }
}
