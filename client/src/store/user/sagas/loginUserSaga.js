import { loginUserActions } from '../user.actions';
import { HTTP_METHOD } from '../../../dictionaries/httpMethods';
import requestSaga from '../../utils/requestSaga';
import { call } from 'redux-saga/effects';


export default function* loginUserSaga(action) {
    const { username, password } = action.payload;


    yield call(requestSaga, {
        method: HTTP_METHOD.POST,
        url: 'api/auth/login',
        payload: {
            usernameOrEmail: username,
            password
        },
        actions: loginUserActions,
    });
}
