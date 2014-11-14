define('begin:begin', function (require, exports, module) {
    // 导出
    module.exports = begin;

    // beginjs支持的接口
    var supportedInterfaces = [
        'Array', 'String', 'Number',
        'HTMLDivElement', 'HTMLElement', 'Element', 'Node',
        'EventTarget',
        'Object'
    ]

    /**
     * begin JS
     * 填充浏览器间的不同
     * @param {Mix} object 对象，可以是JS对对象array、object、number等，也可以是DOM对象inputElement、divElement等
     */
    function begin(object) {
        var me = this;
        var env = window || global;
        var toString = Object.prototype.toString;

        for (var i = 0, supportedInterface; supportedInterface = supportedInterfaces[i]; i++) {
            if (object instanceof supportedInterface) {
                if (typeof begin[supportedInterface] === 'undefined') {
                    // 不存在对应的接口，直接返回对象
                    return object;
                } else {
                    // begin上附有对应的接口，返回一个接口实例
                    return new begin[supportedInterface](object);
                }
            }
        }
    }
});
