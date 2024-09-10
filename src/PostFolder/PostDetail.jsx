// 게시물 화면
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import usePosts from "./UsePosts";

const Container = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: space-between; 
    align-items: center;       
    text-align: center;
    height: 100vh; 
`;

const H2 = styled.h2`
    margin-bottom: 10px; 
`;

const Hr = styled.hr`
    border: none; 
    width: 800px;
    border-top: 0.5px solid #8D8D8D;  
    margin: 20px 0; 
`;

const P = styled.p`
    margin-bottom: 50px; 
    flex-grow: 1;
`;

const ModifyButton = styled(Link)`
    padding: 5px;
    font-size: 10px;
    width: 160px;
    text-align: center;
    background-color: white;
    color: black;
    border-radius: 8px;
    border: 0.5px solid  #8D8D8D; /* 테두리 추가 */
    text-decoration: none;
    transition: 0.2s ease-in;

    &:hover {
        transform: scale(1.02);
    }
`;

const DeleteButton = styled(Link)`
    padding: 5px;
    font-size: 10px;
    width: 160px;
    text-align: center;
    background-color: white;
    color: black;
    border-radius: 8px;
    border: 0.5px solid  #8D8D8D; /* 테두리 추가 */
    text-decoration: none;
    transition: 0.2s ease-in;

    &:hover {
        transform: scale(1.02);
    }
`;

const BackButton = styled(Link)`
    padding: 5px;
    font-size: 10px;
    width: 160px;
    text-align: center;
    background-color: white;
    color: black;
    border-radius: 8px;
    border: 0.5px solid  #8D8D8D; /* 테두리 추가 */
    text-decoration: none;
    transition: 0.2s ease-in;

    &:hover {
        transform: scale(1.02);
    }
`;

function PostDetail() {
    const { id } = useParams(); 
    const history = useHistory(); 
    const { posts } = usePosts(); 
    const [post, setPost] = useState(null); 

    useEffect(() => {
        const foundPost = posts.find(post => post.id === Number(id)); 
        if (foundPost) {
            setPost(foundPost);
        }
    }, [id, posts]);

    const handleDeleteClick = () => {
        history.push(`/deletepassword/${id}`);
    };

    return (
        <Container>
            {post ? (
                <div>
                    <H2>{post.title}</H2>
                    <Hr />
                    <P>{post.content}</P>
                    <br />
                    <DeleteButton onClick={handleDeleteClick} to={`/deletepassword/${id}`}>삭제</DeleteButton>
                    <BackButton to="/">홈 화면으로 이동</BackButton>
                </div>
            ) : (
                <p>게시물을 불러오는 중입니다...</p>
            )}
        </Container>
    );
}

export default PostDetail;