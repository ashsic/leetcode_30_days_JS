/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    };

    // Or this (faster)
    // var createHelloWorld = function() {
    //     return () => "Hello World";
    // };

};




/** test case
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */