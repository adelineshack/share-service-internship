import { handleActions } from "redux-actions";
import * as actions from "../actions";
import * as actionsPage from "../../components/page/actions/actions";

const defaultState = {
	users: [],
	
};

export const userInfoReducer = handleActions(
	{
		[actions.registerUserSuccess](state, { payload }) {
			console.log(payload);
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
			console.log(payload);
			return {
				...state,
				users: payload,
			};
		},
		[actions.newPasswordUserSuccess](state, { payload }) {
			console.log(payload);
			return {
				...state,
				users: payload,
			};
		},
		[actionsPage.fetchUserDataSuccess](state, { payload }) {
			return {
				...state,
				userInfo: payload,
			};
		},
		[actionsPage.changeUserSuccess](state, { payload }) {
			return {
				...state,
				userInfo: payload,
			};
		},
		[actionsPage.changeUserPassword](state, { payload }) {
			return {
				...state,
				userInfo: payload,
			};
		},
		[actionsPage.changeUserAvatar](state, { payload }) {
			return {
				...state,
				userInfo: payload,
			};
		},
	},
	defaultState
);
