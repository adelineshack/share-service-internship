import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import * as actionsPage from '../../components/page/actions/actions';

const defaultState = {
	users: [],
	userData: [],
	userPass: [],
	userAvatar: []
};

export const userInfoReducer = handleActions(
	{
		[actionsPage.getUserDataSuccess](state, { payload }) {
			return {
				...state,
				userData: payload,
			};
		},
		[actionsPage.changeUserNameSuccess](state, { payload }) {
			return {
				...state,
				userData: payload,
			};
		},
		[actions.registerUserSuccess](state, { payload }) {
			return {
				...state,
				users: payload,
			};
		},
		[actions.enterUserSuccess](state, { payload }) {
			console.log(payload);
			return {
				...state,
				users: payload,
			};
		},
		[actions.recoverUserSuccess](state, { payload }) {
			return {
				...state,
				users: payload,
			};
		},
		[actions.newPasswordUserSuccess](state, { payload }) {
			return {
				...state,
				users: payload,
			};
		},
		[actionsPage.fetchUserDataSuccess](state, { payload }) {
			console.log(payload);
			return {
				...state,
				userInfo: payload,
			};
		},
		[actionsPage.changeUserPasswordSuccess](state, { payload }) {
			return {
				...state,
				userPass: payload,
			};
		},
		[actionsPage.changeUserAvatarSuccess](state, { payload }) {
			return {
				...state,
				userAvatar: payload,
			};
		},
	},
	defaultState
);
