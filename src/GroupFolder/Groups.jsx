import React from "react";
import { Link } from "react-router-dom";

function Groups({ groups, onDelete }) {
  return (
    <div>
      <h1>Map 프로젝트</h1>
      <h2>그룹 선택</h2>
      <ul>
        {groups.map((group, index) => (
          <li key={index}>
            <Link to={`/group/${group.name}`}>{group.name}</Link>
            <button onClick={() => onDelete(group.name)}>삭제</button>
          </li>
        ))}
      </ul>
      <Link to="/create">
        <button>그룹 만들기</button>
      </Link>
    </div>
  );
}

export default Groups;