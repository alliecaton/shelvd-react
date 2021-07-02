export const fetchResults = query => {
	return dispatch => {
		fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${query}+inTitle&printType=books&orderBy=relevance`
		)
			.then(r => r.json())
			.then(json => {
				const data = { query: query, json: json }
				console.log(query, data)
				dispatch({ type: 'GET_RESULTS', payload: data })
			})
	}
}
