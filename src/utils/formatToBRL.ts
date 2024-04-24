/** Will format a string to BRL */
export function formatToBRL(price: number) {
	return price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
