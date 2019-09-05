import React from 'react';

import Button from '../Button';

export default function Pagination() {
    return (
        <div
            style={{
                textAlign: 'center',
            }}
        >
            <Button>Anterior</Button>
            <Button>Próximo</Button>
        </div>
    );
}
