import { takeLatest, all, call, put } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import api from '../../../services/api';
import { updateTableSuccess, updateTableFailure } from './actions';

export function* updateTable({ payload }) {
    try {
        const { name } = payload.data;
        const pagination = '?_page=1&limit=10';
        const response = yield call(api.get, `books${pagination}`, {
            name,
        });

        console.tron.log('payload', payload.data);
        console.tron.log('response', response.data);
        yield put(updateTableSuccess(response.data));
    } catch (err) {
        yield put(updateTableFailure());
    }
}

export default all([takeLatest('@books/UPDATE_TABLE_REQUEST', updateTable)]);
