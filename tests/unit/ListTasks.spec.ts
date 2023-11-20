import { mount } from '@vue/test-utils'
import ListTasks from '@/components/ListTasks.vue'

describe('ListTasks.vue', () => {
  it('displays "empty" when there is no task', () => {
    const wrapper = mount(ListTasks)

    expect(wrapper.find('#list').text()).toMatch('empty')
  })
  it('displays the task name when there is a task', () => {
    const wrapper = mount(ListTasks, {
      data () {
        return { tasks: ['test'] }
      }
    })
    expect(wrapper.find('#list').text()).toMatch('test')
  })
})
