import { takeLatest, all } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
// import api from '../services/api';

export function* updateTable({ payload }) {
    console.tron.log('update table');
    console.tron.log(payload);
    yield;
    // try {
    //     const { name, email, avatar_id, ...rest } = payload.data;

    //     yield put(updateProfileSuccess(response.data));
    // } catch (err) {
    //     yield put(updateProfileFailure());
    // }
}

export default all([takeLatest('@user/UPDATE_TABLE_REQUEST', updateTable)]);
