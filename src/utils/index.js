export default {
    /**
     * 节流函数
     * @param {需要执行的函数} func
     * @param {间隔时间} delay
     */
    throttle(func, delay) {
        let prev;
        return function (...rest) {
            const now = Date.now();
            if (!prev || now - prev >= delay) {
                func(...rest);
                prev = Date.now();
            }
        };
    }
}