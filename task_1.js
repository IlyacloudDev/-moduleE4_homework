function getPropertiesOfObject(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(`Property - ${key}; Value - ${obj[key]} \n`)
        }
    }
}


let prototype = {
    university: 'MGIMO',
};

let student = Object.create(prototype);
student.name = 'Ilya';
student.age = 21;
student.faculty = 'journalism';


getPropertiesOfObject(student)
