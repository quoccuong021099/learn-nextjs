import { StudentDetail } from '@/componenst/swr';
import React, { useState } from 'react';

export default function SWRPage() {
  const [listStudent, setListStudent] = useState([1]);

  function handleAddStudentClick() {
    setListStudent((listStudent) => [...listStudent, 1]);
  }

  return (
    <div>
      <h1>SWR layout</h1>
      <button onClick={handleAddStudentClick}>Add a student</button>
      <ul>
        {listStudent.map((x, idx) => (
          <li key={idx}>
            <StudentDetail studentId="sktwi1cgkkuif36f3" />
          </li>
        ))}
      </ul>
    </div>
  );
}
