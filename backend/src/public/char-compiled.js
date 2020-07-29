export function checkLength(data) {
    var _this = this;

    var REG_CHINESE = /[\u4e00-\u9fa5]/g;
    var REG_NOT_CHINESE = /^[\u4e00-\u9fa5]+$/;
    if (data) {
        var chineseLength = data.match(REG_CHINESE) ? data.match(REG_CHINESE).length : 0;
        var charLength = data.match(REG_NOT_CHINESE) ? data.match(REG_NOT_CHINESE).length : 0;
        var total = chineseLength * 2 + charLength;
        if (total > 100) {
            var count = 0;
            var copyData = data.slice(0);
            while (total > 100) {
                count++;
                var isChinese = /[\u4e00-\u9fa5]/.test(copyData.charAt(copyData.length - 1));
                copyData = copyData.slice(0, -1);
                total = isChinese ? total - 2 : total - 1;
            }
            this.$nextTick(function () {
                _this.versionForm.notes = data.slice(0, -count);
            });
        }
    }
}

//# sourceMappingURL=char-compiled.js.map