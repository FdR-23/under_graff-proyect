const priceFormater = (price) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: '2' }).format(price ?? 0);
}

export default priceFormater