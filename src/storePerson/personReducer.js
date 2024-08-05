const defaultState = {
	person123: []
};

const ADD_PERSON = 'ADD_PERSON';

export const personReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_PERSON:
			return { ...state, person123: [...state.person123, action.payload] };
		default:
			return state;
	}
};
