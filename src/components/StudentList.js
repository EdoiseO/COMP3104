import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students }) => {
  return (
    <section className="student-list" aria-labelledby="student-list-heading">
      <div className="list-heading">
        <h2 id="student-list-heading">Student List</h2>
        <span className="student-count" aria-label={`${students.length} student${students.length === 1 ? "" : "s"}`}>{students.length}</span>
      </div>
      {students.length > 0 ? (
        students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))
      ) : (
        <p className="empty-state">No students added yet</p>
      )}
    </section>
  );
};

export default StudentList;
