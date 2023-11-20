<template>
    <h1>List</h1>
    <div id="list">
      {{tasks[0]}}
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
