import {fireEvent, render, screen} from '@testing-library/react'
import Button from './components/button'

describe('Button component', () => {

    it('should render with grey background', () => {

        const {getByRole} = render(<Button disabled={false} onClick={() => {}}>Click</Button>)
        const btn = getByRole('button', {name: 'Click'})

        expect(btn).toHaveStyle({backgroundColor: 'red'})

    })

    it('should call onClick prop when clicked', () => {

        const clickFunc = jest.fn()
        const {getByRole} = render(<Button disabled={false} onClick={clickFunc}>Click</Button>)

        const btn = getByRole('button', {name: 'Click'})

        fireEvent.click(btn)

        expect(clickFunc).toHaveBeenCalled()
        expect(clickFunc).toHaveBeenCalledWith()

    })

})