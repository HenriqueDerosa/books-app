import { takeLatest, all, call, put } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import api from '../../../services/api';
import { updateTableSuccess, updateTableFailure } from './actions';

export function* updateTable({ payload }) {
    console.tron.log('update table');
    console.tron.log(payload);
    try {
        const { name, ...rest } = payload.data;
        const response = call(api.get, 'books', {
            name,
            ...rest,
        });
        yield put(updateTableSuccess(response.data));
    } catch (err) {
        yield put(updateTableFailure());
    }
}

export default all([takeLatest('@books/UPDATE_TABLE_REQUEST', updateTable)]);
