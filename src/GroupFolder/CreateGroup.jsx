import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateGroup({ onCreate }) {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const history = useHistory();

  const handleCreate = () => {
    if (groupName && groupDescription) {
      const newGroup = { name: groupName, description: groupDescription};
      const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
      const updatedGroups = [...storedGroups, newGroup];
      localStorage.setItem("groups", JSON.stringify(updatedGroups));
      onCreate(newGroup);
      history.push("/"); // 그룹을 생성한 후 Groups 페이지로 이동
    }
  };

  return (
    <div>
      <h1>그룹 만들기</h1>
      <input
        type="text"
        value={groupName}
        onChange={(event) => setGroupName(event.target.value)}
        placeholder="그룹 이름을 입력하세요."
      />
      <input
        type="text"
        value={groupDescription}
        onChange={(event) => setGroupDescription(event.target.value)}
        placeholder="그룹 소개를 입력하세요."
      />
      <button onClick={handleCreate}>그룹 생성</button>
    </div>
  );
}

export default CreateGroup;