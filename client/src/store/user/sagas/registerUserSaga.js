import { registerUserActions } from '../user.actions';
import requestSaga from '../../utils/requestSaga';
import { HTTP_METHOD } from '../../../dictionaries/httpMethods';
import { call } from 'redux-saga/effects';


export default function* registerUserSaga(action) {
    const { username, email, password } = action.payload;

    yield call(requestSaga, {
        method: HTTP_METHOD.POST,
        url: 'api/auth/register',
        payload: {
            username,
            email,
            password
        },
        actions: registerUserActions,
    });
}
