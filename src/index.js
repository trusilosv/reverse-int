module.exports = function reverse(n) {
    let temp = "";
    if (n < 0)
        n = n * -1;
    while (n >= 1) {
        temp = temp + n % 10;
        n = n - n % 10;
        n = n / 10;

    }
    return temp;
}