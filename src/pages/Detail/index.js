import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';

import bookImage from '../../assets/book-placeholder.png';

export default function Detail({ match, history }) {
    const { id } = match.params;
    const books = useSelector(state => state.books.table);
    const book = books.find(b => b.id == id);

    if (book === undefined || book === null) {
        return (
            <Container>
                <span>Nenhum dado encontrado</span>
            </Container>
        );
    }

    return (
        <>
            <Container>
                <div>
                    <button type="button" onClick={() => history.push('/')}>
                        Voltar
                    </button>
                    <div>
                        <img src={bookImage} alt={book.title} />
                        <h3>Titulo</h3>
                        <p>{book.title}</p>
                        <br />
                        <hr />

                        <h3>Autor</h3>
                        <p>{book.author}</p>
                        <br />
                        <hr />

                        <h3>Idioma</h3>
                        <p>{book.language}</p>
                        <br />
                        <hr />

                        <h3>Editora</h3>
                        <p>{book.publisher}</p>
                        <br />
                        <hr />

                        <h3>Ano</h3>
                        <p>{book.year}</p>
                        <br />
                        <hr />

                        <h3>Páginas</h3>
                        <p>{book.pages}</p>
                        <br />
                        <hr />

                        <h3>Peso em gramas</h3>
                        <p>{book.weight}</p>
                        <br />
                        <hr />

                        <h3>Comprimento</h3>
                        <p>{book.length}</p>
                        <br />
                        <hr />

                        <h3>Largura</h3>
                        <p>{book.weight}</p>
                        <br />
                        <hr />

                        <h3>Altura</h3>
                        <p>{book.height}</p>
                        <br />
                    </div>
                </div>
            </Container>
        </>
    );
}
