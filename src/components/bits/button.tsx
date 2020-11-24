import React from 'react';
import styled from 'styled-components';
import {ColorPrimary, ColorSecondary} from '../../styles/theme';

interface Props{
}

const Button = (props:Props) => {
    const Btn = styled.button`
        width:100px;
        height:20px;
        color:${ColorSecondary};
        background-color:${ColorPrimary};
        border:none;
        height:2em;
        font-size:1rem;
    `;
    return <>
        <Btn type="button">
            click me
        </Btn>
    </>
};

export default Button;