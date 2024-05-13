import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/components/Header'

const meta: Meta<typeof Header> = {
    title: 'Componentes/Header',
    component: Header,
    parameters: {
        layout: 'centered',
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => <Header tag="Uma tag" title="Um titulo para o cabeçalho" />,
}
