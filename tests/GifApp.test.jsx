import { render, screen, fireEvent } from "@testing-library/react"
import { GifApp } from "../src/GifApp"

describe('GifApp testing', () => {

    const category = 'Vegeta'

    test('should match with snapshot', () => {

        const {container} = render(<GifApp />)
        expect(container).toMatchSnapshot()

    })

    test('should not execute onAddCategory if the input has a value', () => {
        
        const onAddCategory = jest.fn()
        
        render(<GifApp />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        
        fireEvent.input(input, { target: {value: category} })
        fireEvent.submit(form)
        
        expect(input.value).toBe('')
        expect(onAddCategory).not.toHaveBeenCalled()
        expect(onAddCategory).toHaveBeenCalledTimes(0)
        
    })
    
    // test('should execute onAddCategory if the input has a value', () => {
        
        // const onAddCategory = jest.fn()
        // render(<GifApp />)
    
        // const form = screen.getByRole('form')
        // fireEvent.submit(form)
    
        // expect(input.value).toBe('')
        // expect(onNewCategory).toHaveBeenCalled()
        // expect(onNewCategory).toHaveBeenCalledTimes(1)
        // expect(onAddCategory).toHaveBeenCalledWith(category) 

    // })

})