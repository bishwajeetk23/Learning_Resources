function* sum(){
    yield 3;
    yield 4;
    yield 5;
}
const get = sum();
for(let o of get){
    console.log(o);
}
