import { type VariantProps, cva } from 'class-variance-authority'

import type { ReactNode } from 'react'

const cardStatus = cva('', {
	variants: {
		variant: {
			positive: 'text-emerald-500 dark:text-emerald-400',
			negative: 'text-rose-500 dark:text-rose-400',
		},
	},
	defaultVariants: {
		variant: 'positive',
	},
})

type CardStatusProps = VariantProps<typeof cardStatus> & {
	className?: string
	children: ReactNode
}

export function CardStatus({
	className,
	children,
	variant = 'positive',
}: CardStatusProps) {
	return (
		<span className={cardStatus({ className, variant })}>
			{variant === 'positive' && '+'}
			{children}
		</span>
	)
}
