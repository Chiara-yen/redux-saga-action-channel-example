
export default function fetchData(state = {data: null, error: '', count: 0}, action) {
  switch (action.type) {
    case 'FETCH_SUCCEEDED':
      return Object.assign({}, state, {
      	data: state.data === null ? [action.data] : [...state.data, action.data]
      })

    case 'FETCH_FAILED':
      return Object.assign({}, state, {error: action.error})

    case 'INCREMENT':
    	return Object.assign({}, state, {count: state.count + 1})

    default:
      return state
  }
}
