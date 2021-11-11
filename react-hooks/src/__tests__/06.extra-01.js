import * as React from 'react'
import {alfredTip} from '@kentcdodds/react-workshop-app/test-utils'
import {render, screen, act} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import App from '../final/06'
import App from '../exercise/06.extra-01'

beforeEach(() => jest.spyOn(window, 'fetch'))
afterEach(() => window.fetch.mockRestore())

describe(App, () => {
  it('should render correctly', () => {
    render(<App />)

    expect(screen.getByText(/Pokemon Name/i)).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', {name: /pokemon name/i}),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument()
    expect(screen.getByText(/Submit a pokemon/i)).toBeInTheDocument()
  })
  it('should render error message', async () => {
    render(<App />)
    const input = screen.getByLabelText(/pokemon/i)
    const submit = screen.getByText(/^submit$/i)

    userEvent.type(input, 'any_thing')
    act(() => userEvent.click(submit))

    expect(await screen.findByText(/There was an error:/i)).toBeInTheDocument()
  })
  it('displays the pokemon', async () => {
    render(<App />)
    const input = screen.getByLabelText(/pokemon/i)
    const submit = screen.getByText(/^submit$/i)

    // verify that an initial request is made when mounted
    userEvent.type(input, 'pikachu')
    userEvent.click(submit)

    await screen.findByRole('heading', {name: /pikachu/i})

    // verify that a request is made when props change
    userEvent.clear(input)
    userEvent.type(input, 'ditto')
    userEvent.click(submit)

    await screen.findByRole('heading', {name: /ditto/i})

    // verify that when props remain the same a request is not made
    window.fetch.mockClear()
    userEvent.click(submit)

    await screen.findByRole('heading', {name: /ditto/i})

    alfredTip(
      () => expect(window.fetch).not.toHaveBeenCalled(),
      'Make certain that you are providing a dependencies list in useEffect.',
    )
  })
})
