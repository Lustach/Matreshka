<template>
  <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
  >
    <v-card>
      {{task}}
      {{ task.comment }}
      {{ tempTaskComment }}
      <v-card-title>Название: {{ task.title }}</v-card-title>
      <v-card-text>
        <h2 class="mb-4">Категория: {{ $route.params.id }}</h2>
        <h3 class="mb-4">Описание:{{ task.description }}</h3>
        <h3 class="mb-4"> Выполнено : <span v-show="task.state">Да</span> <span v-show="!task.state">Нет</span></h3>
        <v-textarea no-resize outlined v-model="tempTaskComment" label="Комментарий"></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="error"
            text
            @click="closeDialog()"
        >
          Закрыть
        </v-btn>
        <v-btn
            color="green darken-1"
            text
            @click="closeDialog('with_save')"
        >
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    task: Object,
    dialog: Boolean,
  },
  name: 'App',
  data: () => ({
    tempTaskComment: null
  }),
  mounted() {
    this.tempTaskComment = this.task.comment
  },
  methods: {
    closeDialog(save) {
      save?this.$set(this.task, 'comment', this.tempTaskComment):this.tempTaskComment = this.task.comment
      console.log(this.tempTaskComment,this.task.comment)
      // console.log(this.task.comment)
      this.$emit('closeDialog')
    },
    // saveDialog(){
    // }

  },
  computed: {},
}
</script>
