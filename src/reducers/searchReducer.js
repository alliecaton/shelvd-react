const searchReducer = (
	state = {
		query: '',
		queryResults: [],
		loading: false,
	},
	action
) => {
	switch (action.type) {
		case 'GET_RESULTS':
			return {
				...state,
				query: action.payload.query,
				queryResults: action.payload.queryResults,
				loading: false,
			};

		default:
			return state;
	}
};

export default searchReducer;
