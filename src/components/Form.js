import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {v4} from 'uuid';
import {addTodo} from "../features/todo/todoSlice";

const StyledForm = styled.form`
  display: flex;
  width: 100%;
`;


const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 2px solid #ddd;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: lime;
  }

  &::placeholder {
    font-size: 14px;
  }
`;


const Button = styled.button`
  padding: 8px 16px;
  background-color: #3ea402;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8bc34a;
  }
`;


const Form = () => {
    const dispatch = useDispatch()
    const [todoValue, setTodoValue] = useState('')
    const addTodoHandler = () => {
        const todo = {
            id: v4(),
            text: todoValue,
            completed: false,
        }

        dispatch(addTodo(todo))
        setTodoValue('')
    }
    return (
        <StyledForm onSubmit={(e) => e.preventDefault()}>
            <Input type='text' value={todoValue} placeholder='Type something...'
            onChange={(e) => setTodoValue(e.target.value)}
            />
            <Button type='submit' onClick={() => addTodoHandler()}>Submit</Button>
        </StyledForm>
    );
};

export default Form;



