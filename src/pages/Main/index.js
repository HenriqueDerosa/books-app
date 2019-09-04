import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import Header from '../../components/Header';

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
                                <tr>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.publisher}</td>
                                    <td>{item.year}</td>
                                    <td>Detalhes</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </Container>
        </>
    );
}

export default Main;
