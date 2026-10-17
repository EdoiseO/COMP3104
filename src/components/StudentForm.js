import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    major: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.name && student.age && student.major) {
      addStudent(student);
      setStudent({ name: "", age: "", major: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="student-name">Name:</label>
        <input
          type="text"
          id="student-name"
          name="name"
          placeholder="e.g. Alex Taylor"
          value={student.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="student-age">Age:</label>
        <input
          type="number"
          id="student-age"
          name="age"
          placeholder="e.g. 21"
          value={student.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="student-major">Major:</label>
        <input
          type="text"
          id="student-major"
          name="major"
          placeholder="e.g. Computer Programming"
          value={student.major}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
