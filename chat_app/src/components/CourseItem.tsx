import React from 'react';
import { Course } from '../interfaces/interface';

type CourseItemProps = {
  course: Course
}

const CourseItem = (props: CourseItemProps) => {
  const course = props.course;

  return (
    <div>
      <ul>
        <li key={course.id}>{course.number} - {course.title}</li>
      </ul>
    </div>
  );
}

export default CourseItem;