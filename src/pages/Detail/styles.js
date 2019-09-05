import styled from 'styled-components';

export const Container = styled.div`
    margin: 30px auto;
    text-align: center;
    color: #000;

    span {
        margin: auto;
        font-weight: bold;
    }

    button {
        margin: 20px;
        color: black;
        border-color: black;
    }

    div {
        width: 900px;
        margin: auto;
        > div {
            display: flex;
            flex-direction: column;
            text-align: left;
            img {
                margin: auto;
                width: 150px;
                height: 210px;
                border-radius: 6px;
                box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
            }
        }

        hr {
            border-color: rgb(241, 101, 80);
        }
    }
`;
