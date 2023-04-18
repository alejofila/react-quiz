import styled from 'styled-components'


export const Button = styled.button`
    border: 1px solid #7F00b2;
    border-radius: 50px;
    padding: 15px 30px;
    text-decoration: none;
    color: #a9e9a4;
    background-color: #ab49cc;
    transition: 0.3s;
    font-size: 1em;
    cursor: pointer;
    outline: none;

    &:hover {
        color: white;
        background-color: #a9e9a4;
    }
`;

export default Button
