import { stringify } from 'querystring';
import { history } from 'umi';
// import { login } from '@/services/login';
import { getPageQuery } from '@/utils/utils';
import { message } from 'antd';
import md5 from 'md5';
import {login} from "../pages/Login";
const LoginModel = {

    namespace: 'login',
    status: '',
    loginType: '',
    state: {
        token: '',
    },
    effects: {
        *login({ payload }, { call, put }) {
        payload.client = 'admin';
        // payload.password = md5(payload.password);
        const response = yield call(login, payload);
        if (response.code !== 10000) {
            message.error(response.message);
            return;
        }
// set token to local storage
        if (window.localStorage) {
            window.localStorage.setItem('jwt-token', response.data.token);
        }
        yield put({
            type: 'changeLoginStatus',
            payload: { data: response.data, status: response.status, loginType: response.loginType },
        }); // Login successfully
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        console.log(redirect);
        if (redirect) {
            const redirectUrlParams = new URL(redirect);
            if (redirectUrlParams.origin === urlParams.origin) {
                redirect = redirect.substr(urlParams.origin.length);
                if (redirect.match(/^\/.*#/)) {
                    redirect = redirect.substr(redirect.indexOf('#') + 1);
                }
            } else {
                window.location.href = '/home';
            }
        }
        history.replace(redirect || '/home');
        },
        logout() {
            const { redirect } = getPageQuery(); // Note: There may be security issues, please note
            window.localStorage.removeItem('jwt-token');
            if (window.location.pathname !== '/user/login' && !redirect) {
                history.replace({
                    pathname: '/user/login',
                    search: stringify({
                        redirect: window.location.href,
                    }),
                });
            }
        },
    },
    reducers: {
        changeLoginStatus(state, { payload }) {
            return {
            ...state,
            token: payload.data.token,
            status: payload.status,
            loginType: payload.loginType,
            };
        },
    },
};
export default LoginModel;