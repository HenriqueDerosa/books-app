import { takeLatest, all, call, put } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import api from '../../../services/api';
import { updateTableSuccess, updateTableFailure } from './actions';

export function* updateTable({ payload }) {
    try {
        const { search, ...rest } = payload.data;
        const res = yield call(api.get, `books`, {
            params: {
                _page: 1,
                q: search,
                ...rest,
            },
        });

        const response = {
            table: res.data,
            totalAmount: res.headers['x-total-count'],
        };

        console.tron.log('payload', payload.data);
        console.tron.log('response', response);
        yield put(updateTableSuccess(response));
    } catch (err) {
        yield put(updateTableFailure());
    }
}

export default all([takeLatest('@books/UPDATE_TABLE_REQUEST', updateTable)]);
