export const getThings = function getThings(a, b,c ) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const things = [1, 2, 3, 4, 5];
            resolve(things);
        }, 1000)
    });
};