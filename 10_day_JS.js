/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let memo = {}
    return (...args) => {
        if (!([args] in memo)) {
            memo[args] = fn(...args);
        }
        return memo[args];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */