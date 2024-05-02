import { Skeleton } from '@/components/ui/skeleton'

export function MetricsCardSkeleton() {
	return (
		<div className="space-y-1">
			<Skeleton className="h-8 w-12" />
			<Skeleton className="h-4 w-32" />
		</div>
	)
}
