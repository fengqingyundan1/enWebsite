export function checkLength(data) {
    const REG_CHINESE = /[\u4e00-\u9fa5]/g;
    const REG_NOT_CHINESE = /^[\u4e00-\u9fa5]+$/ ;
    if (data) {
        const chineseLength = data.match(REG_CHINESE) ? data.match(REG_CHINESE).length : 0;
        const charLength = data.match(REG_NOT_CHINESE) ? data.match(REG_NOT_CHINESE).length : 0;
        let total = chineseLength * 2 + charLength;
        if (total > 100) {
            let count = 0;
            let copyData = data.slice(0);
            while (total > 100) {
                count ++;
                const isChinese = /[\u4e00-\u9fa5]/.test(copyData.charAt(copyData.length - 1));
                copyData = copyData.slice(0, -1);
                total = isChinese ? total - 2 : total - 1;
            }
            this.$nextTick(() => {
                this.versionForm.notes = data.slice(0, - count);
            })
        }
    }
}

