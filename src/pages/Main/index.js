import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container } from './styles';

import Header from '../../components/Header';
import Pagination from '../../components/Pagination';

function Main() {
    const table = useSelector(state => state.books.table);

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
                <Pagination />
                <span>
                    Os dados de ISBN, livros, datas, são em parte fictícios, em
                    parte tirados de bancos abertos da internet
                </span>
            </Container>
        </>
    );
}

export default Main;
