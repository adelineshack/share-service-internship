import { handleActions } from 'redux-actions';
import * as actions from '../actions/actions';

const defaultState = {
	users: [],
	userInfo: {},
	goalsId: {},
};

export const userInfoReducer = handleActions(
	{
		[actions.getGoalsIdSuccess](state, { payload }) {
			console.log(payload);
			return {
				...state,
				goalsId: payload,
			};
		},
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
