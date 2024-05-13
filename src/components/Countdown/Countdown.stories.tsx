import type { Meta, StoryObj } from '@storybook/react'

import { Countdown } from '@/components/Countdown'

const meta: Meta<typeof Countdown> = {
    title: 'Componentes/Countdown',
    component: Countdown,
    parameters: {
        layout: 'centered',
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => <Countdown />,
}
