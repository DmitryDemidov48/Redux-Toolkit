import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";


const StyledLastName = styled.div`
  font-weight: bold;
`;


const LastName = () => {
    const name = useSelector((state) => state.user.lastName )
    return <StyledLastName>{name}</StyledLastName>;
};

export default LastName;
