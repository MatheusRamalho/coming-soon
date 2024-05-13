import { render, screen } from '@testing-library/react'

import { Header } from '@/components/Header'

describe('Header', () => {
    it('should render Header', () => {
        render(<Header tag="Testando tag" title="Testando title" />)

        const heading = screen.getByTestId('header')

        expect(heading).toBeInTheDocument()
    })
})
