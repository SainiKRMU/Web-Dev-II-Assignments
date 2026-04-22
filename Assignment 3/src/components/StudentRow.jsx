import { useState } from "react";

export default function StudentRow({ student, updateScore }) {
  const [newScore, setNewScore] = useState(student.score);

  const isPass = student.score >= 40;

  return (
    <tr>
      <td>{student.name}</td>

      <td>{student.score}</td>

      <td className={isPass ? "pass" : "fail"}>
        {isPass ? "Pass" : "Fail"}
      </td>

      <td>
        <input
          type="number"
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
        />
        <button onClick={() => updateScore(student.id, newScore)}>
          Update
        </button>
      </td>
    </tr>
  );
}