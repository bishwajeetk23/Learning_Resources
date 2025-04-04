// Generator function
function* sum(){
    yield 3;
    yield 4;
    yield 5;
}

// return generator object Object [Generator] {}
const get = sum();
for(let o of get){
    console.log(o);
}

// type number
function t_sum(a:number,b:number):number{
    return a+b;
}

// By default value provided in argument itself
function user(name: string, email : string, isPair : boolean = false){
    return {
        name,
        email,
        isPair
    };
}
console.log(user("Kumar Bishwajeet","kumar@adani.com"));

// Objects
function createUser(user:{name:string,email:string,isPaid:boolean}):{name:string,email:string,isPaid:boolean}{
    return user;
}

const user1 =  {
    name :"Kumar",
    email:"kumar@adani.com",
    isPaid:false
};
console.log(createUser(user1));

// Type Alias
type Point = {
    x:number;
    y:number;
}

type cardDate = {
    cardDate: string
}
type cardNumber = {
    cardNumber: number
}

//  Defining a new type using previous types
type cardDetails = cardDate & cardNumber & {
    cvv: number
}


// Union - uses pipe operator
let Myuser: number | string;

function getDbId(id: number | string){
    // here it will give error as it is only valid for string but id can be number or string 
    // id.toLowerCase();

    if(typeof id === "string"){
        id.toLowerCase();
    }
}