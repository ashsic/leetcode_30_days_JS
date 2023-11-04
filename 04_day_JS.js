/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = (init) => {
    let initial = init;
    let curr = init;
    return {
        increment: () => {
            return ++curr;
        },
        decrement: () => {
            return --curr;
        },
        reset: () => {
            curr = initial;
            return curr;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */