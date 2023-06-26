const formattor = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' })

export default function formarCurrency(amount) {
    return formattor.format(amount)
}