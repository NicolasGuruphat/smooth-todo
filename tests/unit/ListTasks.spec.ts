import { mount } from '@vue/test-utils'
import ListTasks from '@/components/ListTasks.vue'

describe('ListTasks.vue', () => {
  it('display "empty" when there is no task', () => {
    const wrapper = mount(ListTasks)

    expect(wrapper.find('#list').text()).toMatch('empty')
  })
})
