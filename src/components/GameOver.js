import { useState } from 'react'
import styled from 'styled-components'
import {Button} from './Button'
import result from '../img/result.jpeg'
import allQuestions from '../questions.js'

const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

const GameOver = ({pts}) => {
    const [showFinalResult, setShowFinalResult] = useState(false)
    console.log(showFinalResult)
    if(showFinalResult){
        return(
            <img style={{width:'320px', height: '300px'}} src={result}></img>
        )
    }
    else {
        return(
            <> 
            <Title>Has completado el quiz mi amor</Title>
            <Points>Hiciste {pts} de {allQuestions.length}</Points>
            <Button onClick ={ () =>setShowFinalResult(true)}>Reclamar premio</Button>
        </>
        )
    }
        
}

export default GameOver
