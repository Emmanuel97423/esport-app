import { mount, shallowMount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

const factory = () => {
  return shallowMount(Logo, {})
}

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
