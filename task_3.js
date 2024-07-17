let emptyObject = () => {
    let result = new Object;
    return result
}


let newObject = emptyObject();


console.log(newObject);
console.log(Object.getPrototypeOf(newObject));
