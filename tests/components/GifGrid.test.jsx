import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('GifGrid testing', () => {
    
    const category = 'One Punch'

    test('should show the loading', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render(<GifGrid category={category} />)
        
        expect(screen.getByText('Loading...'))
        expect(screen.getByText(category))

    })
    
    test('should show the items when the useFetchGifs images is loaded', () => {

        const gifs = [
            {
                id: 'ABC1',
                title: 'Saitama',
                utl: 'https://one-punch.com/saitama.jpg'
            },
            {
                id: 'ABC2',
                title: 'Vegeta',
                utl: 'https://drangon-ball.com/vegeta.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2)

    })
    
})