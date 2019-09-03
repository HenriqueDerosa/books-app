import React from 'react';

import { useDispatch } from 'react-redux';
import { updateTableRequest } from '../../store/modules/books/actions';

import { Container } from './styles';

export default function Header() {
    const dispatch = useDispatch();
    function handleClick() {
        dispatch(
            updateTableRequest({
                name: 'teste',
                test: 'works',
            })
        );
    }

    return (
        <Container>
            <div>
                <h1>SUPERO</h1>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Busque livros pelo título, autor ou ISBN"
                />
                <button type="button" onClick={handleClick}>
                    Buscar
                </button>
            </div>
            <hr />
            <div>
                <div>
                    <span>Filtrar ano de publicação</span>
                    <input
                        type="number"
                        min="1700"
                        max="2099"
                        step="1"
                        value="1920"
                    />
                    <input
                        type="number"
                        min="1700"
                        max="2099"
                        step="1"
                        value="2016"
                    />
                </div>
                <div>
                    <span>{} resultados encontrados</span>
                </div>
            </div>
            <hr />
        </Container>
    );
}
