<template>
  <v-container>
    <v-row class="text-center">
      <v-col v-for="(e) in tasks" :key="e.id">
        <taskList :data="e"></taskList>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  components: {
    taskList: () => import('@/components/TaskList')
  },
  computed: {
    ...mapGetters([
      'tasks'
    ]),
  },
}
</script>
<style>

</style>
