import React from 'react';

import { Container } from './styles';
import Header from '../../components/Header';

function Main() {
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
                        <tr>
                            <td>Pequeno príncipe</td>
                            <td>Harper Collins</td>
                            <td>Antoine de Saint-Exupéry</td>
                            <td>2011</td>
                            <td>Detalhes</td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </>
    );
}

export default Main;
