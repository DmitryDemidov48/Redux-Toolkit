import React from 'react';
import styled from 'styled-components';
import FirstName from './FirstName';
import LastName from './LastName';
import {useDispatch} from "react-redux";
import {setFirstName, setLastName} from "../features/user/userSlice";


const StyledUserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 2px solid transparent;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: lime;
  }
`;


const StyledNameContainer = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 20px;
`;


const StyledLabel = styled.div`
  flex: 1;
  font-weight: lighter;
`;

const User = () => {
    const dispatch = useDispatch()
    return (
        <StyledUserContainer>
            <StyledInput type='text' placeholder='First Name'
            onChange={(e) => {
                dispatch(setFirstName(e.target.value))
            }}
            />
            <StyledInput type='text' placeholder='Last Name'
                         onChange={(e) => {
                             dispatch(setLastName(e.target.value))
                         }}
            />
            <StyledNameContainer>
                <div>
                    <StyledLabel>First Name:</StyledLabel>
                    <FirstName />
                </div>
                <div>
                    <StyledLabel>Last Name:</StyledLabel>
                    <LastName />
                </div>
            </StyledNameContainer>
        </StyledUserContainer>
    );
};

export default User;
