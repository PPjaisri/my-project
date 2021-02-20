import React from 'react';

const NewCourseForm = () => {
  const [newCourseNumber, setNewCourseNumber] = React.useState<string>('');
  const [newCourseTitle, setNewCourseTitle] = React.useState<string>('');

  const changeCourseNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCourseNumber(e.target.value);
  }

  const changeCourseTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCourseTitle(e.target.value);
  }

  const save = () => {
    const body = {
      "number": newCourseNumber,
      "title": newCourseTitle
    }
    fetch('http://localhost:3000/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    window.location.reload();
  }

  return (
    <div>
      Number : <input type="text" value={newCourseNumber} onChange={changeCourseNumber} /> <br />
      Title : <input type="text" value={newCourseTitle} onChange={changeCourseTitle} /> <br />
      <input type="submit" onClick={save} />
    </div>
  );
}

export default NewCourseForm;