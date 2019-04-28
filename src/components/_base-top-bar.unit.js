/* eslint-disable no-undef */
import TopBar from './top-bar'

describe('@components/top-bar', () => {
  it(`displays the user's name in the top bar`, () => {
    const wrapper = shallowMount(
      TopBar,
      createComponentMocks({
        store: {
          auth: {
            state: {
              currentUser: {
                name: 'Jett Liu',
              },
            },
            getters: {
              loggedIn: () => true,
            },
          },
        },
      })
    )
    const currentUser = wrapper
      .findAll('.right li')
      .at(0)
      .text()

    expect(currentUser).toEqual('Jett Liu')
  })
})
