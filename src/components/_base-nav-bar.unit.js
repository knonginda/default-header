/* eslint-disable no-undef */
import BaseNavBar from './_base-nav-bar'

describe('@components/nav-bar', () => {
  it('render its content', async () => {
    const wrapper = shallowMount(BaseNavBar)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
