import Vue from 'vue'
import Vuex from 'vuex'

export const GET_TASKS = 'get/tasks'
export const UPDATE_TASKS = 'update/tasks'
export const UPDATE_COMMENT = 'update/comment'
Vue.use(Vuex)
const localVue = new Vue()
export default new Vuex.Store({
	state: {
		tasks: {
		},
	},
	actions: {
		async [GET_TASKS]({ commit }) {
			const result = await localVue.$API.get.AllQuests()
			commit(GET_TASKS, result)
		},
		async [UPDATE_TASKS]({state}){
			await localVue.$API.patch.updateTasks(state.tasks)
		},
		async [UPDATE_COMMENT]({state},data){
			console.log(state,data,'state')
			await localVue.$API.patch.updateComment(data)
		}
	},
	mutations: {
		[GET_TASKS](state, { data }) {
			localVue.$set(state, 'tasks', data)
		},
	},
	modules: {},
	getters: {
		tasks: state => state.tasks,
		categories: state => state.categories,
	}
})
