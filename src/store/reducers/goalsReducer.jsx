import { handleActions } from 'redux-actions';
import {
	getGoalsIdSuccess,
	getJoinedSuccess,
} from '../../components/page/actions/actions';
import * as actions from '../actions';

const defaultState = {
	categories: [],
	goals: [],
	filteredCategoryId: null,
	joinedClubs: [],
	myParties: [],
	goalsId: {},
	joined: [],
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
		[getGoalsIdSuccess](state, { payload }) {
			console.log(payload);
			return {
				...state,
				goalsId: payload,
			};
		},
		[getJoinedSuccess](state, { payload }) {
			console.log(payload);
			return {
				...state,
				joined: payload,
			};
		},
		[getGoalsIdSuccess](state, { payload }) {
			console.log(payload);
			return {
				...state,
				goalsId: payload,
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
