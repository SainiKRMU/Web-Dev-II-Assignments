import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Akshay Punia", score: 39 },
    { id: 2, name: "Palakshi Kapoor", score: 68 },
    { id: 3, name: "Anubhav Kashyap", score: 50 },
  ]);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    const updated = students.map((s) =>
      s.id === id ? { ...s, score: Number(newScore) } : s
    );
    setStudents(updated);
  };

  return (
    <div className="container">
      <Header />

      <AddStudentForm addStudent={addStudent} />

      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}