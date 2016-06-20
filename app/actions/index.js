function action(type, payload = {}) {
  return {type, ...payload}
}

export const fetchData = () => action('FETCH_ASYNC')
