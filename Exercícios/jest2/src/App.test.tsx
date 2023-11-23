import {fireEvent, render, screen} from '@testing-library/react'
import App from './App'

function sum(x: number, y: number) {
    return x + y
}

describe('App component', () => {

    it('should sum correctly', () => {

        expect(sum(2, 4)).toBeGreaterThanOrEqual(6)

    })

    it('Should render App with Hello message', () => {

        render(<App />)
        screen.findByText('Hello, world!')

    })

    it('Should change message on button click', () => {

        const {getByRole, queryByText, getByText} = render(<App />)

        getByText("I hate jestjs")

        const btn = getByRole('button')

        fireEvent.click(btn)

        const msg = queryByText("I hate jestjs")

        expect(msg).not.toBeInTheDocument()

    })

})