const isPro = Object.is(process.env.NODE_ENV, 'production')

console.log(isPro);

module.exports = {
    baseUrl: isPro ? 'https://www.toread.com.cn/index.php/Official' : 'api/'
}