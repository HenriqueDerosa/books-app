import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTableRequest } from '../../store/modules/books/actions';

import { Container } from './styles';

import Header from '../../components/Header';
import Pagination from '../../components/Pagination';

function Main() {
    const {
        page,
        table,
        search,
        year_gte,
        year_lte,
        totalAmount,
    } = useSelector(state => state.books);
    const dispatch = useDispatch();

    function updateTable(direction) {
        dispatch(
            updateTableRequest({
                page: page + direction,
                search,
                year_gte,
                year_lte,
                totalAmount,
            })
        );
    }
    const perPage = 8;
    const totalPages = Math.ceil(totalAmount / perPage);
    return (
        <>
            <Header />
            <Container>
                <table>
                    <thead>
                        <th>Livro</th>
                        <th>Autor</th>
                        <th>Editora</th>
                        <th>Ano</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        {table &&
                            table.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        {item.title} <br /> ({item.isbn})
                                    </td>
                                    <td>{item.author}</td>
                                    <td>{item.publisher}</td>
                                    <td>{item.year}</td>
                                    <Link to={`/detail/${item.id}`}>
                                        Detalhes
                                    </Link>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <span>
                    Os dados de ISBN, livros, datas, são em parte fictícios, em
                    parte tirados de bancos abertos da internet
                </span>
            </Container>
            <Pagination
                page={page}
                disablePrev={page === 1}
                disableNext={page >= totalPages}
                clickPrev={() => updateTable(-1)}
                clickNext={() => updateTable(1)}
            />
        </>
    );
}

export default Main;
