import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { deletePostById } from "../features/post/postSlice";


const StyledPostItem = styled.div`
  width: 70%;
  background-color: #4f46e5;
  color: white;
  margin-top: 10px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  word-wrap: break-word; 

  &:hover {
    background-color: #7068ff;
  }
`;


const PostItem = ({ post }) => {
    const dispatch = useDispatch()
    return (
        <StyledPostItem onClick={() => dispatch(deletePostById(post.id))}>
            {post.title}
        </StyledPostItem>
    );
};

export default PostItem;
