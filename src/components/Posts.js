import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../features/post/postSlice";


const StyledPostsContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: start;
`;


const StyledButton = styled.button`
  background-color: #3ea402;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #a6e284;
  }
`;


const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.posts)
    return (
        <StyledPostsContainer>
            <StyledButton type='submit'
            onClick={() => dispatch(getPosts())}
            >Get posts</StyledButton>
            {posts?.map(post => (
                <PostItem key={post.title} post={post}/>
            ))}

        </StyledPostsContainer>
    );
};

export default Posts;
