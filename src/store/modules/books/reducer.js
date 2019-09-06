import produce from 'immer';

const INITIAL_STATE = {
    table: null,
};

export default function books(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@books/UPDATE_TABLE_SUCCESS':
                console.tron.log(state);
                draft.page = action.payload.page;
                draft.table = action.payload.table;
                draft.totalAmount = action.payload.totalAmount;
                draft.search = action.payload.search;
                draft.year_gte = action.payload.year_gte;
                draft.year_lte = action.payload.year_lte;
                break;
            default:
        }
    });
}
