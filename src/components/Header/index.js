import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTableRequest } from '../../store/modules/books/actions';

import { Container } from './styles';

export default function Header() {
    const [search, setSearch] = useState([]);
    const [yearA, setYearA] = useState([]);
    const [yearB, setYearB] = useState([]);

    const totalBooks = useSelector(state => state.books.totalAmount);
    const dispatch = useDispatch();

    function updateTable() {
        dispatch(
            updateTableRequest({
                search,
                year_gte: yearA,
                year_lte: yearB,
            })
        );
    }

    function handleClick() {
        updateTable();
    }

    useEffect(() => {
        setSearch('');
        setYearA(0);
        setYearB(2000);

        updateTable();
    }, []);

    return (
        <Container>
            <div>
                <h1>SUPERO</h1>
                <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                            handleClick();
                            setSearch('');
                        }
                    }}
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
                        value={yearA}
                        onChange={e => setYearA(e.target.value)}
                    />
                    <input
                        type="number"
                        min="0"
                        max="2099"
                        step="1"
                        value={yearB}
                        onChange={e => setYearB(e.target.value)}
                    />
                </div>
                <div>
                    <span>{totalBooks} resultados encontrados</span>
                </div>
            </div>
            <hr />
        </Container>
    );
}
