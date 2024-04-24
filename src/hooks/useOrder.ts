import { useQuery } from '@tanstack/react-query'
import { getOrderDetails } from '@/api/get-order-details'

type UseOrder = {
	orderId: string
	open: boolean
}

export function useOrder({ orderId, open }: UseOrder) {
	return useQuery({
		queryKey: ['order', orderId],
		queryFn: () => getOrderDetails({ orderId }),
		enabled: open,
	})
}
