import { beforeEach, describe, expect, it } from 'vitest'
import { render, cleanup } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
	beforeEach(() => {
		cleanup()
	})

	it('should display correct text and color for pending status', () => {
		const wrapper = render(<OrderStatus status="pending" />)

		const statusText = wrapper.getByText('Pendente')
		const badgeElement = wrapper.getByTestId('order-status-badge')

		expect(badgeElement).toHaveClass('bg-muted-foreground')
		expect(statusText).toBeInTheDocument()
	})

	it('should display correct text and color for processing status', () => {
		const wrapper = render(<OrderStatus status="processing" />)

		const statusText = wrapper.getByText('Em Andamento')
		const badgeElement = wrapper.getByTestId('order-status-badge')

		expect(badgeElement).toHaveClass('bg-amber-500')
		expect(statusText).toBeInTheDocument()
	})

	it('should display correct text and color for delivering status', () => {
		const wrapper = render(<OrderStatus status="delivering" />)

		const statusText = wrapper.getByText('Em Rota')
		const badgeElement = wrapper.getByTestId('order-status-badge')

		expect(badgeElement).toHaveClass('bg-amber-500')
		expect(statusText).toBeInTheDocument()
	})

	it('should display correct text and color for delivered status', () => {
		const wrapper = render(<OrderStatus status="delivered" />)

		const statusText = wrapper.getByText('Entregue')
		const badgeElement = wrapper.getByTestId('order-status-badge')

		expect(badgeElement).toHaveClass('bg-emerald-600')
		expect(statusText).toBeInTheDocument()
	})

	it('should display correct text and color for canceled status', () => {
		const wrapper = render(<OrderStatus status="canceled" />)

		const statusText = wrapper.getByText('Cancelado')
		const badgeElement = wrapper.getByTestId('order-status-badge')

		expect(badgeElement).toHaveClass('bg-rose-600')
		expect(statusText).toBeInTheDocument()
	})
})
