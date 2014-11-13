define('begin:begin', function (require, exports, module) {
    // 导出
    module.exports = begin;

    /**
     * begin JS
     * 填充浏览器间的不同
     * @param {Mix} object 对象，可以是JS对对象array、object、number等，也可以是DOM对象inputElement、divElement等
     */
    function begin(object) {
        var me = this;
        var env = window || global;
        var toString = Object.prototype.toString;

        /**
         * 对象是元素
         */
        if (object instanceof Element) {
            return new begin.Element(object);
        }

        /**
         * 对象是DIV元素
         */
        if (object instanceof HTMLDivElement) {
            return new begin.Element(object);
        }

        /**
         * 对象是DIV元素
         */
        if (toString.call(div) === '[object HTMLDivElement]') {
            return new begin.Element(object);
        }

        /**
         * 对象是节点
         */
        if (object instanceof Node) {
            // 
        }

        /**
         * 对象是数组
         */
        if (object instanceof Array) {
            return new begin.Array(object);
        }

        /**
         * 对象是数字
         */
        if (toString.call(object) === '[object Number]') {
            return new begin.Number(object);
        }
    }
});
