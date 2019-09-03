export function updateTableRequest(data) {
    return {
        type: '@books/UPDATE_TABLE_REQUEST',
        payload: { data },
    };
}
export function updateTableSuccess(table) {
    return {
        type: '@books/UPDATE_TABLE_SUCCESS',
        payload: { table },
    };
}
export function updateTableFailure() {
    return {
        type: '@books/UPDATE_TABLE_FAILURE',
    };
}
