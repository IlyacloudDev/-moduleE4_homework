function checkPropertyInObject(str, obj){
    let result = str in obj? true : false;
    return result 
}


let cat = {
    age: 7,
    mood: 'angry',
    breed: 'meikun',
}


console.log(checkPropertyInObject('name', cat))
