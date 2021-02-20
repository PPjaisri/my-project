import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Course } from "./courses.entity";
import { Repository } from "typeorm";
import { CreateCourseDto } from "../dto/create-course.dto";

Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>
  ) { }

  async findAll(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  async create(createCourseDto: CreateCourseDto) {
    return this.courseRepository.save(createCourseDto);
  }
}