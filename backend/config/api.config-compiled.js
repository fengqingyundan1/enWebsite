import _Object$is from 'babel-runtime/core-js/object/is';
var isPro = _Object$is(process.env.NODE_ENV, 'production');

console.log(isPro);

module.exports = {
    baseUrl: isPro ? 'https://www.toread.com.cn/index.php/Official' : 'api/'
};

//# sourceMappingURL=api.config-compiled.js.map