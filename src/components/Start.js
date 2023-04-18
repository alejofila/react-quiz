import React from 'react'
import styled, { css } from 'styled-components/macro'
import Button from './Button';

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;


const Start = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <Intro>
            <h2>Si completas este quiz, tendras un premio sorpresa monita</h2>
            <h3> Estas lista?</h3>
            <Button onClick={startQuiz} css={btnCSS}>Iniciar</Button>
        </Intro>
    )
}

export default Start
