import { render, screen, getByText } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem"
 
describe('GifGridItem testing', () => {
    
    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'

    test('GifGridItem should match with the snapshot', () => {

        const {container} = render( <GifGridItem title={title} url={url} /> )
        expect(container).toMatchSnapshot()
        
    })
    
    test('should show the image with the URL and ALT indicated', () => {
        
        render( <GifGridItem title={title} url={url} /> )
        // expect(screen.getByRole('img').src).toBe(url)

        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)

    })

    test('should show the title of the component', () => {
        render( <GifGridItem title={title} url={url} /> )
        expect(screen.getByText(title)).toBeTruthy()        
        
    })
    
})