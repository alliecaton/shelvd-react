const searchReducer = (
	state = {
		query: '',
		queryResults: [],
		loading: false,
	},
	action
) => {
	switch (action.type) {
		case 'LOADING':
			return {
				...state,
				loading: action.payload,
			}

		case 'GET_RESULTS':
			return {
				...state,
				query: action.payload.query,
				queryResults: [...action.payload.json.items],
				loading: false,
			}

		case 'GET_SHOW':
			return {
				...state,
				query: action.payload.isbn,
				queryResults: [...action.payload.json.items],
				loading: false,
			}

		default:
			return state
	}
}

export default searchReducer
