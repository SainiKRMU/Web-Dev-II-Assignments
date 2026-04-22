import StudentRow from "./StudentRow";

export default function StudentTable({ students, updateScore }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Status</th>
          <th>Update</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <StudentRow
            key={student.id}
            student={student}
            updateScore={updateScore}
          />
        ))}
      </tbody>
    </table>
  );
}