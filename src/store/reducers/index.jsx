import { handleActions } from "redux-actions";
import * as actions from "../actions";

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
	},
	defaultState
);
