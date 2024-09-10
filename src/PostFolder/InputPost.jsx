//게시글 입력 화면
import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import usePosts from "./UsePosts";

const Container = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;   
    align-items: center;       
    height: 100vh;             
    text-align: center;  
`;

const H2 = styled.h2`
    font-size: 17px;
    margin-bottom: 5px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    margin-bottom: 1rem; 
`;

const Input = styled.input`
    padding: 5px;
    font-size: 16px;
    width: 300px;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid gray;

    &::placeholder {
        font-size: 13px;
    }
`;

const Textarea = styled.textarea`
    padding: 9px;
    font-size: 16px;
    width: 300px;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid gray;
    resize: none; 
    overflow: hidden; 
    min-height: 40px; 

    &::placeholder {
        font-size: 14px; 
        color: gray;     
    }
`;

const InputButton = styled.button`
    padding: 5px;
    font-size: 16px;
    width: 100px;
    text-align: center;
    background-color: #8D8D8D;
    color: white;
    border-radius: 8px;
    border: none;
    transition: 0.2s ease-in;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
    }
`;

function InputPost({ addPost }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { groupName, id } = useParams();  // URL에서 groupName과 id를 받아옴
    const history = useHistory();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const newPost = {
        id,
        group: groupName,  // 그룹 이름을 게시글에 추가
        title,
        content,
      };
      addPost(newPost).then(() => {
        history.push(`/group/${groupName}`);  // 그룹 페이지로 이동
      });
    };
  
    return (
        <Container>
        <H2>게시글 작성 - {groupName}</H2>
        <form onSubmit={handleSubmit}>
            <InputContainer>
          <Input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
         </InputContainer>
          <InputButton type="submit">게시글 생성</InputButton>
        </form>
      </Container>
    );
  }
  
  export default InputPost;