
import { createAction } from "redux-actions";
import axios from "axios";
import { navigate } from '@reach/router';


axios.defaults.baseURL = `https://share-service.mircod.one/api`;
// const token = localStorage.token;
// const config = {
// 	headers: { Authorization: `Token ${token}` }
// };

axios.interceptors.request.use(function (config) {
	const token = localStorage.token;
			
	if (localStorage.token !== null) {
		config.headers.Authorization = `Token ${token}`;
	}
	return config;
});



export const registerUserSuccess = createAction("REGISTER_USER_SUCCESS");

export const registerUser = (userData) => {
	return (dispatch) => {
		// Можно юзать async/await
		// axios.get('https://share-service.mircod.one/api/' + 'user/').then()...
		// axios.post('https://share-service.mircod.one/api/' + 'auth/sign_up/', { first_name: 'test', last_name: 'test', ... }).then()...
		// Рекомендация: baseUrl лучше указывать при инициализации axios, Authorization: Token your_token можно также указать при ините, он будет автоматом отправляться в запросах (где нужен в апишке)

		axios.post('/auth/sign_up/', userData)
			.then(function (response) {
				const { data } = response; 
				dispatch(registerUserSuccess(response));
				localStorage.setItem("token", data.auth_token);
				navigate('/success-auth');
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
				const { data } = response; 
				localStorage.setItem("token", data.auth_token);
				dispatch(enterUserSuccess(response));
				navigate('/success-auth');
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
		
		axios.post('/auth/send_email_confirmation/', userData)
			.then(function (response) {
				const { data } = response; 
				localStorage.setItem("token", data.auth_token);
				dispatch(recoverUserSuccess(response));
				navigate('/reply-recover');
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
				navigate('/changed-password');
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};