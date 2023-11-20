<template>
  <list-tasks />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListTasks from './components/ListTasks.vue'

export default defineComponent({
  name: 'App',
  components: {
    ListTasks
  },
  data () {
    return {
      tasks: []
    }
  }
})
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
