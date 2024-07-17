function checkPropertyInObject(str, obj){
    let result = str in obj? true : false;
    return result 
}


let cat = {
    breed: 'meikun',
};

let kitty = Object.create(cat);
kitty.name = 'Bob';
kitty.age = 7;


console.log(checkPropertyInObject('breed', kitty));
