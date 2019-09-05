import styled from 'styled-components';

export const StyledButton = styled.button`
    cursor: pointer;
    background: rgb(241, 101, 80, 1);
    color: white;
    padding: 12px;
    text-transform: uppercase;
    font-weight: bold;
    border: 2px solid #fff;
    border-radius: 4px;
    transition: background 0.2s;
    &:hover {
        background: rgb(241, 101, 80, 0.8);
    }
`;
