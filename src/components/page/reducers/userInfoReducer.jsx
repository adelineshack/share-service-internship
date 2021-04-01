import { handleActions } from 'redux-actions';
import * as actions from '../actions/actions';

const defaultState = {
	users: [],
	userInfo: {},
};

export const userInfoReducer = handleActions(
	{
		[actions.fetchUserDataSuccess](state, { payload }) {
			return {
				...state,
				userInfo: payload,
			};
		},
		[actions.changeUserSuccess](state, { payload }) {
			return {
				...state,
				userInfo: payload,
			};
		},
		[actions.changeUserPassword](state, { payload }) {
			return {
				...state,
				userInfo: payload,
			};
		},
		[actions.changeUserAvatar](state, { payload }) {
			return {
				...state,
				userInfo: payload,
			};
		},
	},
	defaultState
);
