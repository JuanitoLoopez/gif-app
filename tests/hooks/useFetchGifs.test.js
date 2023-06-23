import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('useFetchGifs testing', () => {

    const category = 'Vegeta'

    test('should return the inicial state', () => {

        const { result } = renderHook(() => useFetchGifs(category))
        const { images, isLoading } = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()

    })

    test('should return an image array and also isLoading false', async () => {
        
        const { result } = renderHook(() => useFetchGifs(category))
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )
            
        const { images, isLoading } = result.current
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).not.toBeTruthy()

    })

})