function addTwo(num: number) : number  {
    return num + 2;
}

console.log(addTwo(5));

function getUpper(val: string) : string {
    return val.toUpperCase();
}

console.log(getUpper('Yash'));

function signUpUser(username: string, email: string, 
    password: string) {
        return 'Signed Up'
}

let result = signUpUser('yashwanth', 'yashwanth@abc.com', 'abc123432');

console.log(result);

let loginUser = (name: string, email: string, 
    isPaid: boolean = false) => {
        if(name === 'yashwanth') {
            return true;
        }
        return false;
    }

console.log(loginUser('yashwanth', 'yashwanth@abc.com'))

const getHello = (s: string): string => {
    return 'Hello Yash';
}

console.log(getHello('test'));

let heros = [ 'Superman', 'Batman', 'Flash'];

heros.map((hero): string => {
    return 'hero is ${hero}'
});

console.log(heros);

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}
