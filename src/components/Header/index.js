import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTableRequest } from '../../store/modules/books/actions';

import { Container } from './styles';

export default function Header() {
    const [search, setSearch] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        // component did mount
    }, []);

    function handleClick() {
        dispatch(
            updateTableRequest({
                filter: search,
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
                    onChange={e => setSearch(e.target.value)}
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
                        min="0"
                        max="2099"
                        step="1"
                        value="0"
                    />
                    <input
                        type="number"
                        min="0"
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
