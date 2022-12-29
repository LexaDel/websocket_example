import { registerUserActions } from '../user.actions';
import requestSaga from '../../utils/requestSaga';
import { HTTP_METHOD } from '../../../dictionaries/httpMethods';
import { API_ROUTES } from '../../../../../endpoints/api.routes';
import { call } from 'redux-saga/effects';


export default function* registerUserSaga(action) {
    const { username, email, password } = action.payload;

    yield call(requestSaga, {
        method: HTTP_METHOD.POST,
        url: API_ROUTES.REGISTER,
        payload: {
            username,
            email,
            password
        },
        actions: registerUserActions,
    });
}
