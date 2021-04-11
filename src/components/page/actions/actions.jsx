import axios from 'axios';
import { createAction } from 'redux-actions';

// axios.defaults.baseURL = `https://kitbucket.ru/api`;
// axios.interceptors.request.use(function (config) {
// 	const token = '2a411a269574576e5873f82945a4e13b6021e427'; // from store
// 	config.headers.Authorization = `Token ${token}`;
// 	return config;
// });

export const fetchUserDataSuccess = createAction('FETCH_USER_DATA_SUCCESS');
export const changeUserSuccess = createAction('CHANGE_USER_SUCCESS');
export const changeUserPassword = createAction('CHANGE_USER_PASSWORD');
export const changeUserAvatar = createAction('CHANGE_USER_AVATAR');

export const fetchUserData = () => {
	return (dispatch) => {
		console.log(axios.defaults.headers.Authorization);
		axios
			.get('user/{id}/')
			.then((data) => {
				dispatch(fetchUserDataSuccess(data));
				console.log(data);
			})
			.catch((err, data) => {
				console.log(err);
				console.log(data);
			});
	};
};

export const changeUser = (userData) => {
	return (dispatch) => {
		axios
			.patch('user/{id}/', userData)
			.then((data) => {
				dispatch(changeUserSuccess(data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const changePassword = (userData) => {
	return (dispatch) => {
		axios
			.patch('user/{id}/change_password/', userData)
			.then((data) => {
				if (data.status === 200) {
					console.log('Success!');
					dispatch(changeUserPassword(data));
				} else {
					console.log('We have errors!');
				}
				console.log(data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};
};

// var bodyFormData = new FormData();
// bodyFormData.append('image', imageFile);

export const changeAvatar = (userData) => {
	return (dispatch) => {
		const formData = new FormData();
		formData.append('avatar', userData);
		console.log(formData.avatar);
		axios
			.post('user/avatar/', formData, {
				headers: {
					'Content-Type':
						'multipart/form-data;boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
				},
			})
			.then((data) => {
				dispatch(changeUserAvatar(data));
				console.log('success');
			})
			.catch((err) => {
				console.log(err);
				console.log(':(');
			});
	};
};
