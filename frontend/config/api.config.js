/**
 * Created by Toread on 2019-6-24.
 */
const isPro = Object.is(process.env.NODE_ENV, 'production')

console.log(isPro);

module.exports = {
  baseUrl: isPro ? 'https://www.toread.com.cn/index.php/Official' : 'api/'
}
