export const fetchResults = query => {
	return dispatch => {
		fetch(`http://localhost:3001/results/${query}`)
			.then(r => r.json())
			.then(json => {
				const data = { query: query, json: json.results }
				dispatch({ type: 'GET_RESULTS', payload: data })
			})
	}
}

export const fetchShow = isbn => {
	return dispatch => {
		fetch(`http://localhost:3001/results/${isbn}`)
			.then(r => r.json())
			.then(json => {
				const data = { isbn: isbn, json: json.results }
				dispatch({ type: 'GET_SHOW', payload: data })
			})
	}
}
