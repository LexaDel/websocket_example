import { registerUserActions } from '../user.actions';
import requestSaga from '../../utils/requestSaga';
import { HTTP_METHOD } from '../../../dictionaries/httpMethods';
import { API_ROUTES } from '../../../endpoints/api.routes';
import { getAccessToken } from '../user.selectors';
import { call, select } from 'redux-saga/effects';


export default function* registerUserSaga(action) {
    const { 
        username,
        email,
        password,
        role,
        navigate,
    } = action.payload;

    if (!role) {
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
    } else {
        const token = yield select(getAccessToken);

        yield call(requestSaga, {
            method: HTTP_METHOD.POST,
            url: API_ROUTES.REGISTER_FOR_SUPER_ADMIN,
            payload: {
                username,
                email,
                password,
                role
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
            actions: registerUserActions,
        });
    }

    if (navigate) {
        navigate('/');
    }
}
