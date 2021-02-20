import { Course } from "../interfaces/interface";

export async function fetchCourses(): Promise<Course[]> {
  const result = await fetch('http://localhost:3000/courses');
  const courses = result.json();
  return courses;
}

export default {
  fetchCourses
}