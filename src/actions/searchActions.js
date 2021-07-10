export const fetchResults = query => {
	return dispatch => {
		dispatch({ type: 'LOADING', payload: true })
		fetch(`http://localhost:3001/results/${query}`)
			.then(r => r.json())
			.then(json => {
				const data = { query: query, json: json.results }
				dispatch({ type: 'GET_RESULTS', payload: data })
				dispatch({ type: 'LOADING', payload: false })
			})
	}
}

// export const fetchShow = isbn => {
// 	return dispatch => {
// 		dispatch({ type: 'LOADING', payload: true })
// 		fetch(`http://localhost:3001/books/${isbn}`)
// 			.then(r => r.json())
// 			.then(json => {
// 				const data = { isbn: isbn, json: json.results }
// 				console.log(data)
// 				dispatch({ type: 'GET_SHOW', payload: data })
// 				dispatch({ type: 'LOADING', payload: false })
// 			})
// 	}
// }
