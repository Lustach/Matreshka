<template>
  <v-card class="pb-4">
    <v-row class="align-center">
      <v-col class="mr-2" cols="10">
        <v-card-title class="d-flex justify-center pr-0">
          <h5 class="text-h5">{{ data.title }}</h5>
        </v-card-title>
      </v-col>
    </v-row>
    <draggable v-model="data.tasks" class="px-4" group="tasks" @change="updateTasks()">
      <v-card-text v-for="(e,i) in data.tasks" :key="i" class="py-0 mb-2 test">
        <v-row class="d-flex align-center">
          <v-col class="d-flex flex-row align-center" cols="12">
            <v-card @click="openTask(i)" class="pr-3" max-width="450" style="width:100%">
              <v-card-title><h5>{{ e.title }}</h5></v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </draggable>
    <About :dialog="dialog" v-if="dialog" :task="taskForDialog" @closeDialog="closeDialog()" @saveDialog="saveDialog($event)"></About>
  </v-card>
</template>
<script>
import draggable from 'vuedraggable'
import {UPDATE_TASKS, UPDATE_COMMENT} from '../store/index'
import {mapGetters} from 'vuex'

export default {
  name: 'TaskList',
  components: {
    draggable,
    About: () => import('@/components/About')
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => [],
    }
  },
  data: () => ({
    dialog: false,
    taskForDialog: null,
    taskIndexForDialog: null,
    UPDATE_TASKS: UPDATE_TASKS,
    UPDATE_COMMENT: UPDATE_COMMENT
  }),
  methods: {
    openTask(i) {
      console.log(i, 'i')
      this.dialog = true
      this.taskForDialog = this.data.tasks[i]
      this.taskIndexForDialog = i
    },
    updateTasks() {
      this.$store.dispatch(UPDATE_TASKS)
    },
    closeDialog() {
      console.log(this.taskForDialog)
      this.dialog = false
      this.$store.dispatch(UPDATE_COMMENT, { taskId: this.data.id, index: this.taskIndexForDialog, taskObject: this.taskForDialog })
    },
    saveDialog(e) {
      this.dialog = false
      console.log(e, this.taskForDialog, this.data)
    }
  },
  computed: {
    ...mapGetters(["tasks"]),
  }
}
</script>
<style scoped>
</style>
