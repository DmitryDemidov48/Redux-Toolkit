import React from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import User from './components/User';
import Posts from './components/Posts';
import {useSelector} from "react-redux";


const StyledAppContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: #f5f4f4; 
 
`;


const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 200px;
 
 
`;




const App = () => {
    const todos = useSelector((state) => state.todo.todos)
    return (
        <StyledAppContainer>
            <div className='container mx-auto px-4'>
                <StyledHeaderContainer>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5 text-white'>State Change</h1>
                        <User />
                    </div>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5 text-white'> Todo App</h1>
                        <Form />
                        {
                            todos?.map(todo => (
                                <TodoItem key={todo.id} todo={todo}/>
                            ))}

                    </div>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5 text-white'>Async Thunk</h1>
                        <Posts />
                    </div>
                </StyledHeaderContainer>
            </div>
        </StyledAppContainer>
    );
};

export default App;
