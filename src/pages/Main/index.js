import React from 'react';

import { useDispatch } from 'react-redux';
import { updateTableRequest } from '../../store/modules/books/actions';

import { Container } from './styles';

function Main() {
    const dispatch = useDispatch();
    function handleClick() {
        dispatch(updateTableRequest('teste'));
    }

    return (
        <Container>
            <h3>Main</h3>
            <div>
                <button type="button" onClick={handleClick}>
                    Testar
                </button>
            </div>
        </Container>
    );
}

export default Main;
