
import { updateUserInfoActions } from '../user.actions';
import { HTTP_METHOD } from '../../../dictionaries/httpMethods';
import requestSaga from '../../utils/requestSaga';
import { API_ROUTES } from '../../../endpoints/api.routes';
import { call } from 'redux-saga/effects';


export function* updateUserInfoSaga(action) {
    const { userId, firstName, secondName } = action.payload;
    
    yield call(requestSaga, {
        method: HTTP_METHOD.PATCH,
        url: API_ROUTES.USER_INFO,
        params: {
            userId,
        },
        payload: {
            firstName,
            secondName,
        },
        actions: updateUserInfoActions
    });
}
