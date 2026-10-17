import "./App.css";
import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <main className="App">
      <header className="app-header">
        <h1>Student Information System</h1>
        <p className="app-description">Add a student and view their details below.</p>
        <p className="developer-details">Developed By: 101489064 || Phillip Onofua || DevOps</p>
      </header>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </main>
  );
};

export default App;
