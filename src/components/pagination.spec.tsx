import { cleanup, fireEvent, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { userEvent } from '@testing-library/user-event'

import { Pagination } from './pagination'
import { renderWithRouterProps } from '@/../test/renderWithRouter'

describe('Pagination', () => {
	beforeEach(() => {
		cleanup()
	})

	it('should display correct pagination info', async () => {
		const wrapper = await waitFor(() =>
			renderWithRouterProps({
				element: (
					<>
						<Pagination pageIndex={0} perPage={10} totalCount={200} />
					</>
				),
			}).then(({ wrapper }) => wrapper),
		)

		expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
		expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
	})

	it('should be able to navigate to next page', async () => {
		const user = userEvent.setup()

		const { wrapper, router } = await waitFor(() =>
			renderWithRouterProps({
				element: (
					<>
						<Pagination pageIndex={0} perPage={10} totalCount={200} />
					</>
				),
				path: '/orders',
			}).then(({ wrapper, router }) => ({
				wrapper,
				router,
			})),
		)

		const nextPageLink = wrapper.getByRole('link', { name: 'Próxima página' })

		await user.click(nextPageLink)

		expect(router.state.location.search).toEqual(
			expect.objectContaining({
				page: 2,
			}),
		)
	})

	it('should be able to navigate to last page', async () => {
		const user = userEvent.setup()

		const { wrapper, router } = await waitFor(() =>
			renderWithRouterProps({
				element: (
					<>
						<Pagination pageIndex={0} perPage={10} totalCount={200} />
					</>
				),
				path: '/orders',
			}).then(({ wrapper, router }) => ({
				wrapper,
				router,
			})),
		)

		const lastPageLink = wrapper.getByRole('link', { name: 'Última página' })

		await user.click(lastPageLink)

		expect(router.state.location.search).toEqual(
			expect.objectContaining({
				page: 20,
			}),
		)
	})

	it('should be able to navigate to previous page', async () => {
		const user = userEvent.setup()

		const { wrapper, router } = await waitFor(() =>
			renderWithRouterProps({
				element: (
					<>
						<Pagination pageIndex={0} perPage={10} totalCount={200} />
					</>
				),
				path: '/orders',
			}).then(({ wrapper, router }) => ({
				wrapper,
				router,
			})),
		)

		const lastPageLink = wrapper.getByRole('link', { name: 'Última página' })
		const previousPageLink = wrapper.getByRole('link', {
			name: 'Página anterior',
		})

		await user.click(lastPageLink)
		await user.click(previousPageLink)

		expect(router.state.location.search).toEqual(
			expect.objectContaining({
				page: 19,
			}),
		)
	})

	it('should be able to navigate to first page', async () => {
		const user = userEvent.setup()

		const { wrapper, router } = await waitFor(() =>
			renderWithRouterProps({
				element: (
					<>
						<Pagination pageIndex={0} perPage={10} totalCount={200} />
					</>
				),
				path: '/orders',
			}).then(({ wrapper, router }) => ({
				wrapper,
				router,
			})),
		)

		const lastPageLink = wrapper.getByRole('link', { name: 'Última página' })
		const firstPageLink = wrapper.getByRole('link', { name: 'Primeira página' })

		await user.click(lastPageLink)
		await user.click(firstPageLink)

		expect(router.state.location.search).toEqual(
			expect.objectContaining({
				page: 1,
			}),
		)
	})
})
