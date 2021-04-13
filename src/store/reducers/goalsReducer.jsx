import { handleActions } from "redux-actions";
import * as actions from "../actions";


const defaultState = {
	categories: [],
	goals: [],
	filteredCategoryId: null,
	joinedClubs: [],
	myParties: [],
};

export const goalsReducer = handleActions(
	{	
		[actions.getMyPartiesSuccess](state, { payload }) {
			console.log(payload);
			return {
				...state,
				myParties: payload,
			};
		},
		[actions.joinGoalsSuccess](state, { payload }) {
			console.log(payload);
			return {
				...state,
				joinedClubs: payload,
			};
		},
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
