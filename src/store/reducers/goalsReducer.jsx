import { handleActions } from "redux-actions";
import * as actions from "../actions";


const defaultState = {
	categories: [],
	goals: [],
	filteredCategoryId: null,
};

export const goalsReducer = handleActions(
	{
		[actions.getGoalsCategoriesSuccess](state, { payload }) {
			console.log(payload);
			return {
				...state,
				categories: payload,
			};
		},
		[actions.getGoalsSuccess](state, { payload }) {
			console.log(payload);
			return {
				...state,
				goals: payload,
			};
		},
		[actions.filterGoalsSuccess](state, { payload }) {
			console.log(payload);
			return {
				...state,
				filteredCategoryId: payload,
			};
		},
		
	},
	defaultState
);
