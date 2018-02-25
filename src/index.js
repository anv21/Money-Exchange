// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency <= 0) {
        return {};
    }

    if (currency >= 10000) {
        return { error: 'You are rich, my friend! We don\'t have so much coins for exchange' };
    }

    let H = 0;
    let Q = 0;
    let D = 0;
    let N = 0;
    let P = 0;

    while (currency - 50 >= 0) {
        H += 1;
        currency -= 50;
    }

    while (currency - 25 >= 0) {
        Q += 1;
        currency -= 25;
    }

    while (currency - 10 >= 0) {
        D += 1;
        currency -= 10;
    }

    while (currency - 5 >= 0) {
        N += 1;
        currency -= 5;
    }

    while (currency - 1 >= 0) {
        P += 1;
        currency -= 1;
    }

    result = { H, Q, D, N, P, };

    for (let i in result){
        if (result[i] === 0) delete result[i];
    }

    return result;
};