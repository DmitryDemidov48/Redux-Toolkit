import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";

const StyledFirstName = styled.div`
  font-weight: bold;
`;


const FirstName = () => {
    const name = useSelector((state) => state.user.firstName)
    return <StyledFirstName>{name}</StyledFirstName>;
};

export default FirstName;
