import React from 'react';
import Button from '../Button';

import { Container } from './styles';

export default function Pagination(props) {
    function onClickPrev() {
        if (props.disablePrev) return;
        props.clickPrev();
    }
    function onClickNext() {
        if (props.disableNext) return;
        props.clickNext();
    }

    return (
        <Container>
            <Button
                unavailable={props.disablePrev}
                type="button"
                onClick={onClickPrev}
            >
                ◄
            </Button>
            <span>{props.page}</span>
            <Button
                unavailable={props.disableNext}
                type="button"
                onClick={onClickNext}
            >
                ►
            </Button>
        </Container>
    );
}
