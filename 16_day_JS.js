// fell behind, day 16, used two objects but maybe should have used nested objects?
var TimeLimitedCache = function() {
    this.cache = {};
    this.timeout = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let boolVal = false;
    
    if (this.cache[key]) {
        clearTimeout(this.timeout[key]);
        boolVal = true;
    }
    this.cache[key] = value;

    this.timeout[key] = setTimeout(() => {
        delete this.cache[key];
    }, duration);
    return boolVal;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (this.cache[key]){
        return this.cache[key];
    } else {
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.cache).length;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */