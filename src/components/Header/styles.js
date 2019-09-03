import styled from 'styled-components';

export const Container = styled.div`
    background-image: linear-gradient(
        to bottom right,
        rgb(241, 101, 80),
        rgb(261, 111, 150)
    );
    > div {
        padding: 8px 20px;
        &:first-child {
            padding: 20px;
        }

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        input {
            border: 0;
            outline: 0;
            flex: 1;
            padding: 8px;
            margin: 8px;
            min-height: 43px;
            border-radius: 4px;
            font-size: 15px;
            &[type='number'] {
                min-height: auto;
            }
        }
    }
`;
