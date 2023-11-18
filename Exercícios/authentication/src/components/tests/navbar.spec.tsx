import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter,  } from 'react-router-dom'

import Navbar from '../navbar'
import '@testing-library/jest-dom'

const mockSignOut = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockSignOut
}))

function renderComponent() {

    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    )

}

describe("Navbar", () => {

    it('should render correctly', () => {

        renderComponent()

        expect(screen.getByText('botoes')).toBeInTheDocument()
        expect(screen.getByText('user')).toBeInTheDocument()


    })

    /*it('should call navigate method Home', () => {

        renderComponent()

        const logoutBtn = screen.getByText('test')

        fireEvent.click(logoutBtn)

        expect(mockSignOut).toHaveBeenCalled()
        expect(mockSignOut).toHaveBeenCalledWith('/')

    })

    it('should call navigate method Creeate Post', () => {

        renderComponent()

        const logoutBtn = screen.getByText('crea')

        fireEvent.click(logoutBtn)

        expect(mockSignOut).toHaveBeenCalled()
        expect(mockSignOut).toHaveBeenCalledWith('/createpost')

    })*/

    /*test('should render correctly', () => {

        

    })*/

})