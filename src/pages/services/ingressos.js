


export function calcularTotalIngresso (qtdIng, meioIng, cupom) {

    let tot = 0

    if (meioIng === true) {
         tot = qtdIng * 15.00
    }

    else {
        tot = qtdIng * 30.00
    }

    if (cupom === 'QUERO50') {
        let desc = (tot * 50) / 100
        tot = tot - desc
    }

    return tot

}