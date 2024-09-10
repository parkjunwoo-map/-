import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const H2 = styled.h2`
  margin-bottom: 5px;
`;

const Ul = styled.ul`
  margin-bottom: 35px;
  font-size: 11px;
  padding: 0;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  width: 200px;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid gray;

  &::placeholder {
    font-size: 13px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubmitButton = styled.button`
  padding: 4px;
  font-size: 16px;
  width: 100px;
  text-align: center;
  background-color: #8d8d8d;
  color: white;
  border-radius: 8px;
  border: none;
  transition: 0.2s ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

function AddPW() {
  const [password, setPassword] = useState("");
  const history = useHistory();
  const id = Date.now();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password) {
      // 비밀번호가 입력되면 게시글 생성 페이지로 이동
      history.push(`/group/yourGroupName/createpost/${id}`);
    }
  };

  return (
    <Container>
      <H2>비밀번호 확인</H2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton type="submit">확인</SubmitButton>
      </Form>
    </Container>
  );
}

export default AddPW;