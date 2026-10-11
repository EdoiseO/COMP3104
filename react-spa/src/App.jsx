import React from 'react';

export default function App() {
  return (
    <main className="student-card">
      <p className="course">COMP3104 - Developer Operations</p>
      <h1>My first React SPA</h1>
      <p className="intro">Class Exercise 05: Single Page Application using ReactJs</p>
      <dl>
        <div>
          <dt>Student name</dt>
          <dd>Phillip Onofua</dd>
        </div>
        <div>
          <dt>Student ID</dt>
          <dd>101489064</dd>
        </div>
      </dl>
      <p className="footer">Created with React</p>
    </main>
  );
}
