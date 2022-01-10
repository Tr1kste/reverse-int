module.exports = function reverse(num) {
    const newStr = String(num)
    let revstr = '';
    for (let i = newStr.length - 1; i >= 0; i--) {
        revstr = revstr + newStr[i];
    }
    return revstr.replace(/\D/g, '');
}