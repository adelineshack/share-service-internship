import axios from 'axios';
import { createAction } from 'redux-actions';
import { navigate } from '@reach/router';

export const getGoalsIdSuccess = createAction('GET_GOALS_ID_SUCCESS');
export const fetchUserDataSuccess = createAction('FETCH_USER_DATA_SUCCESS');
export const changeUserNameSuccess = createAction('CHANGE_USER_NAME_SUCCESS');
export const changeUserPasswordSuccess = createAction(
	'CHANGE_USER_PASSWORD_SUCCESS'
);
export const changeUserAvatarSuccess = createAction('CHANGE_USER_AVATAR');
export const getUserDataSuccess = createAction('GET_USER_SUCCESS');
export const getJoinedSuccess = createAction('GET_JOINED_SUCCESS');

export const getGoalsId = (idG) => {
	return (dispatch) => {
		console.log(idG);
		axios
			.get(`/goal/${idG}/`)
			.then(function (response) {
				const { data } = response;
				dispatch(getGoalsIdSuccess(data));
				console.log('нет ошибки, id= ' + idG);
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};

export const getJoined = (idG) => {
	return (dispatch) => {
		axios
			.get(`/goal_party/${idG}/`)
			.then(function (response) {
				const { data } = response;
				dispatch(getJoinedSuccess(data));
				console.log('присоединились: ');
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};

export const getUserData = () => {
	return (dispatch) => {
		axios
			.get('/user/')
			.then(function (response) {
				const { data } = response;
				dispatch(getUserDataSuccess(data));
				console.log(response);
				// console.log(data);
			})
			.catch(function (error) {
				if (error.response.status === 401) {
					navigate('/auth');
				}

				console.log(error.response);
			});
	};
};

// export const fetchUserData = () => {
// 	return (dispatch) => {
// 		console.log(axios.defaults.headers.Authorization);
// 		axios
// 			.get('user/{id}/')
// 			.then((data) => {
// 				dispatch(fetchUserDataSuccess(data));
// 				console.log(data);
// 			})
// 			.catch((err, data) => {
// 				console.log(err);
// 				console.log(data);
// 			});
// 	};
// };

export const changeUserName = (userData, id) => {
	return (dispatch) => {
		axios
			.patch(`/user/${id}/`, userData)
			.then(function (response) {
				const { data } = response;
				dispatch(changeUserNameSuccess(data));
				console.log(response);
				// console.log(data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};

export const changePassword = (userData, id) => {
	return (dispatch) => {
		axios
			.patch(`user/${id}/change_password/`, userData)
			.then(function (response) {
				const { data } = response;
				dispatch(changeUserPasswordSuccess(data));
				console.log(response);
				// console.log(data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};

// var bodyFormData = new FormData();
// bodyFormData.append('image', imageFile);

export const changeAvatar = (file) => {
	return (dispatch) => {
		const formData = new FormData();
		formData.append('avatar', file);
		console.log(formData.avatar);

		axios
			.post(`/user/avatar/`, formData)
			.then(function (response) {
				const { data } = response;
				dispatch(changeUserPasswordSuccess(data));
				console.log(response);
				// console.log(data);
			})
			.catch(function (error) {
				console.log(error);
			});
		// axios
		// 	.post('user/avatar/', formData, {
		// 		headers: {
		// 			'Content-Type':
		// 				'multipart/form-data;boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
		// 		},
		// 	})
		// 	.then((data) => {
		// 		dispatch(changeUserAvatarSuccess(data));
		// 		console.log('success');
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 		console.log(':(');
		// 	});
	};
};
