import { useState, useEffect } from 'react';

function usePosts() {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts)); 
  }, [posts]);

  const addPost = (newPost) => {
    setPosts(prevPosts => [...prevPosts, newPost]);
    return Promise.resolve(newPost);
  };

  const deletePost = (id) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

  return { posts, addPost, deletePost };
}

export default usePosts;