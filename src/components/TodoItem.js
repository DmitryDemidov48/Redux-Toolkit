import React from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {removeTodo, toggleCompletedTodo} from "../features/todo/todoSlice";


const StyledTodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;


const StyledCompleteButton = styled.div`
  font-size: 14px;
  padding: 10px 16px;
  cursor: pointer;
  background-color: #04189d;
  border-radius: 5px;
  color: white;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #3bbed5;
  }
`;


const StyledTodoText = styled.div`
  font-size: 14px;
  padding: 8px 16px;
  ${props => props.completed && 'font-weight: medium;'}
  ${props => props.completed && 'text-decoration: line-through;'}
`;


const StyledDeleteButton = styled.div`
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #bb4646;
  color: white;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff0000;
  }
`;

const TodoItem = ({todo}) => {
    const dispatch = useDispatch()
    const toggleTodoHandler = (id) => {
        dispatch(toggleCompletedTodo(id))
    }

    const removeTodoHandler = (id) => {
        dispatch(removeTodo(id))
    }
    return (
        <StyledTodoItem>
            <StyledCompleteButton
            onClick={() => toggleTodoHandler(todo.id)}
            >Complete</StyledCompleteButton>
            <StyledTodoText completed={todo.completed}>{todo.text}</StyledTodoText>
            <StyledDeleteButton
                onClick={() => removeTodoHandler(todo.id)}
            >Delete</StyledDeleteButton>
        </StyledTodoItem>
    );
};

export default TodoItem;
