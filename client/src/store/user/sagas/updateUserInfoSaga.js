
import { updateUserInfoActions } from '../user.actions';
import { HTTP_METHOD } from '../../../dictionaries/httpMethods';
import requestSaga from '../../utils/requestSaga';
import { call } from 'redux-saga/effects';


export function* updateUserInfoSaga(action) {
    const { userId, firstName, secondName } = action.payload;
    // change pass userId to params
    yield call(requestSaga, {
        method: HTTP_METHOD.PATCH,
        url: 'api/v1/data/user',
        payload: {
            userId,
            firstName,
            secondName,
        },
        actions: updateUserInfoActions
    });
}
