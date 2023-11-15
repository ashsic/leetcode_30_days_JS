/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
	return async function(...args) {
        let timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t)
        });
        let res = await Promise.race([
            timeoutPromise,
            fn(...args)
        ]);
        return res;
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */