<template>
    <h1>List</h1>
    <div id="list">
      <template v-if="tasks.length === 0">
        empty
      </template>
      <template v-else>
        {{tasks[0]}}
      </template>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ListTasks',
  data () {
    return { tasks: [] }
  }
})
</script>
<style>

</style>
