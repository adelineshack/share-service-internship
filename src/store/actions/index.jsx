
import { createAction } from "redux-actions";
import axios from "axios";
import { navigate } from '@reach/router';


axios.defaults.baseURL = 'https://kitbucket.ru/api';

axios.interceptors.request.use(async (config) => {

	// Non token-needed routes
	if (
		[
			'/auth/sign_up/',
			'/auth/sign_in/',
			'/auth/forgot_password/',
			'/auth/set_new_password/',
		].includes(config.url)
	) {
		return config;
	}
	const token = localStorage.token;

	if (!token) {
		return navigate('/auth/enter-account');
	}
			
	if (localStorage.token !== null) {
		config.headers.Authorization = `Token ${token}`;
	}
	return config;
});



export const registerUserSuccess = createAction("REGISTER_USER_SUCCESS");

export const registerUser = (userData) => {
	return (dispatch) => {
	
		axios.post('/auth/sign_up/', userData)
			.then(function (response) {
				// const { data } = response; 
				// localStorage.setItem("token", data.auth_token);
				dispatch(registerUserSuccess(response));
				navigate('/auth/success-auth');
				console.log(response);
			})
			.catch(function (error) {
				console.log('Ошибка');
				console.log(error);
			});
	};
};


export const enterUserSuccess = createAction("ENTER_USER_SUCCESS");

export const enterUser = (userData) => {
	return (dispatch) => {
		
		axios.post('/auth/sign_in/', userData)
			.then(function (response) {
				// const { data } = response; 
				// localStorage.setItem("token", data.auth_token);
				dispatch(enterUserSuccess(response));
				navigate('/');
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};



export const recoverUserSuccess = createAction("RECOVER_USER_SUCCESS");

export const recoverUser = (userData) => {
	return (dispatch) => {
		
		axios.post('/auth/forgot_password/', userData)
			.then(function (response) {
				// const { data } = response; 
				// localStorage.setItem("token", data.auth_token);
				dispatch(recoverUserSuccess(response));
				navigate('/auth/reply-recover');
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};


export const newPasswordUserSuccess = createAction("NEW_PASSWORD_USER_SUCCESS");

export const newPasswordUser = (userData) => {
	return (dispatch) => {
		
		axios.post('/auth/set_new_password/', userData)
			.then(function (response) {
				const { data } = response; 
				localStorage.setItem("token", data.auth_token);
				dispatch(newPasswordUserSuccess(response));
				navigate('/auth/changed-password');
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};