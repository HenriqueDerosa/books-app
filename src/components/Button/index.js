import styled from 'styled-components';

const Button = styled.button`
    cursor: pointer;
    color: white;
    padding: 12px;
    text-transform: uppercase;
    font-weight: bold;
    border: 2px solid #fff;
    border-radius: 4px;
    transition: background 0.2s;
    background: ${props =>
        props.unavailable === true ? '#999' : 'rgb(241, 101, 80, 1)'};
    &:hover {
        background: ${props =>
            props.unavailable === true ? '#999' : 'rgb(241, 101, 80, 0.8)'};
    }
`;

export default Button;
