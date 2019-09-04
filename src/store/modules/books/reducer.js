import produce from 'immer';

const INITIAL_STATE = {
    table: null,
};

export default function books(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@books/UPDATE_TABLE_SUCCESS':
                console.tron.log(state);
                draft.table = action.payload.table;
                break;
            default:
        }
    });
}
