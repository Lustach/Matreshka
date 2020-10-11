import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
const API = {
	get: {
		AllQuests: () => axios.get(`${BASE_URL}/total`),
	},
	patch: {
		updateTasks: (tasks) => axios.patch(`${BASE_URL}/total`, tasks),
		updateComment: (data) =>axios.patch(`${BASE_URL}/total/${data.taskId}`,data.taskObject)
	},
}

export default {
	install(Vue) {
		Object.defineProperty(Vue.prototype, '$API', { value: API })
	}
}
