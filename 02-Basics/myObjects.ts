const User = {
    name : "Yash",
    email: "yashwanth@lco.dev",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {

}

createUser({name:"yashwanth", isPaid: false})

function createCourse():{name: string, price: number} {
    return {name: "reactjs", price: 399}
}


type User = {
    name: string,
    email: string,
    username: string,
    userid; number
}

function createUserWithUserID(user: User): User {
    
    return user;
}
