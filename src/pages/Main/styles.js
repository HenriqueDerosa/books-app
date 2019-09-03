import styled from 'styled-components';

export const Container = styled.div`
    padding: 8px 20px;
    table {
        width: 100%;
        margin: auto;

        background: rgb(255, 255, 255, 0.15);
        border-collapse: collapse;
        border-radius: 4px;

        th {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid rgb(255, 255, 255, 0.4);
        }
        tr {
            transition: background 0.15s;
            cursor: pointer;

            background: rgb(241, 101, 80, 0.1);

            &:nth-child(odd) {
                background: rgb(241, 101, 80, 0.5);
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
