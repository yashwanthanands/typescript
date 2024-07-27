function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper('Yash'));
function signUpUser(username, email, password) {
    return 'Signed Up';
}
var result = signUpUser('yashwanth', 'yashwanth@abc.com', 'abc123432');
console.log(result);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    if (name === 'yashwanth') {
        return true;
    }
    return false;
};
console.log(loginUser('yashwanth', 'yashwanth@abc.com'));
var getHello = function (s) {
    return 'Hello Yash';
};
console.log(getHello('test'));
var heros = ['Superman', 'Batman', 'Flash'];
heros.map(function (hero) {
    return 'hero is ${hero}';
});
console.log(heros);
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
