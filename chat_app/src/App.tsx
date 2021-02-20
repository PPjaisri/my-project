import React from 'react';
import CourseItem from './components/CourseItem';
import NewCourseForm from './components/NewCourseForm';
import './css/App.css';
import { Course } from './interfaces/interface';
import CoursesService from './services/CoursesService';

const App = () => {
  const [courses, setCourses] = React.useState<Course[]>([]);
  const [visible, setVisible] = React.useState<boolean>(false);

  const fetchMessage = () => {
    CoursesService.fetchCourses()
      .then(courses => setCourses(courses));
  }

  const toggleVisible = () => {
    setVisible(!visible);
  }

  React.useEffect(() => {
    fetchMessage();
  }, [])

  return (
    <div>
      <h1>Courses</h1>
      {courses.map(item => {
        return <CourseItem key={item.id} course={item} />;
      })}
      <button onClick={toggleVisible} >{ visible ? 'Close' : 'New course' }</button>
      { visible && <NewCourseForm /> }
    </div>
  );
}

export default App;
