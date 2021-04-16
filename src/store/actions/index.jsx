import { createAction } from 'redux-actions';
import axios from 'axios';
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
			'/auth/set_new_password/',
			// '/goal/categories/',
			// '/goal/',
		
		].includes(config.url)
	) {
		return config;
	}


	let token = (localStorage.token || sessionStorage.token);
	console.log(token);

	if (!token) {
		return navigate('/auth');
	}
			
	if (token !== null) {
		// console.log('дошло');
		config.headers.Authorization = `Token ${token}`;
		// axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN";
		// axios.defaults.xsrfCookieName = "X-CSRFToken";
	}
	return config;
});

export const registerUserSuccess = createAction('REGISTER_USER_SUCCESS');

export const registerUser = (userData, errorMessage) => {
	return (dispatch) => {
		axios
			.post('/auth/sign_up/', userData)
			.then(function (response) {
				// const { data } = response; 
				// localStorage.setItem("token", data.token);
				dispatch(registerUserSuccess(response));
				navigate('/auth/success-auth');
				console.log(response);
			})
			.catch(function (error) {
				if (error.response.status === 400) {
					errorMessage();
				}
				console.log(error);
			});
	};
};

export const enterUserSuccess = createAction('ENTER_USER_SUCCESS');

export const enterUser = (userData, errorMessage) => {
	return (dispatch) => {
		
		
		axios.post('/auth/sign_in/', userData)
			.then(function (response) {
				const { data } = response;

				localStorage.setItem("token", data.token);
				
				dispatch(enterUserSuccess(response));
				navigate('/user');
				console.log(response);
			})
			.catch(function (error) {
				if (error.response.status === 400) {
					errorMessage();
				}
				console.log(error);
			});
	};
};

export const recoverUserSuccess = createAction('RECOVER_USER_SUCCESS');

export const recoverUser = (userData, errorMessage) => {
	return (dispatch) => {
		axios
			.post('/auth/forgot_password/', userData)
			.then(function (response) {
				// const { data } = response;
				// localStorage.setItem("token", data.auth_token);
				dispatch(recoverUserSuccess(response));
				navigate('/auth/reply-recover');
				console.log(response);
			})
			.catch(function (error) {
				if (error.response.status === 400) {
					errorMessage();
				}
				console.log(error);
			});
	};
};

export const newPasswordUserSuccess = createAction('NEW_PASSWORD_USER_SUCCESS');

export const newPasswordUser = (userData) => {
	return (dispatch) => {
		axios
			.post('/auth/set_new_password/', userData)
			.then(function (response) {
				const { data } = response;
				localStorage.setItem('token', data.auth_token);
				dispatch(newPasswordUserSuccess(response));
				navigate('/auth/changed-password');
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};

export const getGoalsCategoriesSuccess = createAction(
	'GET_GOALS_CATEGORIES_SUCCESS'
);

export const getGoalsCategories = () => {
	return (dispatch) => {
		axios
			.get('/goal/categories/')
			.then(function (response) {
				const { data } = response;
				dispatch(getGoalsCategoriesSuccess(data));
				console.log(response);
				// console.log(data);
			})
			.catch(function (error) {
				console.log(error);
				// navigate('/auth');
			});
	};
};

export const getGoalsSuccess = createAction('GET_GOALS_SUCCESS');

export const getGoals = () => {
	return (dispatch) => {
		axios
			.get('/goal/')
			.then(function (response) {
				const { data } = response;
				dispatch(getGoalsSuccess(data));
				//console.log(data.id.id.bg_image);
				console.log(response);
			})
			.catch(function (error) {
				// navigate('/auth');
				console.log(error);
			});
	};
};

export const filterGoalsSuccess = createAction('FILTER_GOALS_SUCCESS');

export const filterGoals = (filteredData) => {
	return (dispatch) => {
		axios
			.get('/goal/categories/')
			.then(function (response) {
				// const { data } = response;
				dispatch(filterGoalsSuccess(filteredData));
				console.log(response);
				// console.log(data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};

export const joinGoalsSuccess = createAction('JOIN_GOALS_SUCCESS');

export const joinGoals = (id, errorMessage) => {
	return (dispatch) => {
		axios
			.post(`/goal/${id}/join/`)
			.then(function (response) {
				const { data } = response;
				dispatch(joinGoalsSuccess(data));
				console.log(response);
				// console.log(data);
			})
			.catch(function (error) {
				if (error.response.status === 400 ) {
					
					errorMessage('Уже вступили');
				}
				console.log(error.response);
				console.log(error);
			});
	};
};

export const getMyPartiesSuccess = createAction('GET_MY_PARTIES_SUCCESS');

export const getMyParties = (skeleton) => {
	return (dispatch) => {
		axios
			.get(`/goal_party/`)
			.then(function (response) {
				const { data } = response;
				dispatch(getMyPartiesSuccess(data));
				skeleton(false);
				console.log(response);
				// console.log(data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};

export const getPartySuccess = createAction('GET_PARTY_SUCCESS');

export const getParty = (id, isLoaded) => {
	return (dispatch) => {
		axios
			.get(`/goal_party/${id}`)
			.then(function (response) {
				const { data } = response;
				dispatch(getPartySuccess(data));
				console.log(response);
				isLoaded(true);
				// console.log(data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};

export const leavePartySuccess = createAction('LEAVE_PARTY_SUCCESS');

export const leaveParty = (id, message, back) => {
	return (dispatch) => {
		axios
			.post(`/goal_party/${id}/leave/`)
			.then(function (response) {
				const { data } = response;
				back();
				dispatch(leavePartySuccess(data));
				
				console.log(response);
				// console.log(data);
			})
			.catch(function (error) {
				message();
				console.log(error);
			});
	};
};

export const getGoalsTopSuccess = createAction('GET_GOALS_TOP_SUCCESS');

export const getGoalsTop = (data, isLoaded) => {
	return (dispatch) => {
		axios
			.get(`/top/?table_type=${data}`)
			.then(function (response) {
				const { data } = response;
				dispatch(getGoalsTopSuccess(data));
				isLoaded(true);
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};

export const changeAdminSuccess = createAction('CHANGE_ADMIN_SUCCESS');

export const changeAdmin = (id, userData) => {
	return (dispatch) => {
		axios
			.post(`/goal_party/${id}/set_new_admin/`, userData)
			.then(function (response) {
				const { data } = response;
				dispatch(changeAdminSuccess(data));
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};