export const fetchResults = query => {
	return dispatch => {
		fetch('http://localhost:3001/results')
			.then(r => r.json())
			.then(json => {
				const data = { query: query, json: json.results }
				console.log(json)
				dispatch({ type: 'GET_RESULTS', payload: data })
			})
	}
}
