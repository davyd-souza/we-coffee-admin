import { useQuery } from '@tanstack/react-query'
import { getManagedFranchise } from '@/api/get-managed-franchise'

export function useManagedFranchise() {
	return useQuery({
		queryKey: ['managed-franchise'],
		queryFn: getManagedFranchise,
		staleTime: Number.POSITIVE_INFINITY,
	})
}
