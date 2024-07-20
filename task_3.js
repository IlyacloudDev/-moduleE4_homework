let emptyObject = () => {
    let result = Object.create(null);
    return result;
}

let newObject = emptyObject();

console.log(newObject);
console.log(Object.getPrototypeOf(newObject));
