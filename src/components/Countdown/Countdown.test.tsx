import { render, screen } from '@testing-library/react'

import { Countdown } from '@/components/Countdown'

describe('Countdown', () => {
    it('should render Countdown', () => {
        render(<Countdown />)

        const heading = screen.getByTestId('countdown')

        expect(heading).toBeInTheDocument()
    })
})
