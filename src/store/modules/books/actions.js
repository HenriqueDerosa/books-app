export function updateTableRequest(data) {
    return {
        type: '@books/UPDATE_TABLE_REQUEST',
        payload: { data },
    };
}
export function updateTableSuccess(data) {
    return {
        type: '@books/UPDATE_TABLE_SUCCESS',
        payload: data,
    };
}
export function updateTableFailure() {
    return {
        type: '@books/UPDATE_TABLE_FAILURE',
    };
}
