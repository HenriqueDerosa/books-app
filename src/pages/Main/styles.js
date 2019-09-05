import styled from 'styled-components';

export const Container = styled.div`
    padding: 8px 20px;
    color: black;
    a {
        text-decoration: none;
        color: whitesmoke;
        font-weight: bold;
        transition: all 0.2s;
        &:hover {
            text-decoration-line: underline;
            color: white;
        }
    }

    table {
        color: whitesmoke;
        width: 100%;
        margin: auto;

        background: rgb(241, 101, 80);
        border-collapse: collapse;
        border-radius: 4px;

        th {
            padding: 12px;
            text-align: left;
        }
        tr {
            transition: background 0.15s;

            background: rgb(255, 255, 255, 0.1);

            &:nth-child(odd) {
                background: rgb(241, 101, 80, 0.2);
            }

            &:hover {
                background: rgb(255, 255, 255, 0.05);
            }
            td {
                padding: 12px;
                border: none;
            }
        }
    }
`;
