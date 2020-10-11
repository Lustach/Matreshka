import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
const API = {
	get: {
		AllQuests: () => axios.get(`${BASE_URL}/all`),
	},
	patch: {
		updateTasks: (tasks) => axios.patch(`${BASE_URL}/all`, tasks),
	},
}

export default {
	install(Vue) {
		Object.defineProperty(Vue.prototype, '$API', { value: API })
	}
}
