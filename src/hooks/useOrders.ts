import { useQuery } from '@tanstack/react-query'

import { getOrders } from '@/api/get-orders'

type QueryOptions = {
	pageIndex: number
}

type UseOrders = QueryOptions

export const getOrdersOptions = ({ pageIndex }: QueryOptions) => ({
	queryKey: ['orders', pageIndex],
	queryFn: () => getOrders({ pageIndex }),
})

export function useOrders({ pageIndex }: UseOrders) {
	return useQuery(getOrdersOptions({ pageIndex }))
}
