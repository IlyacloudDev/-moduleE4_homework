function ElectricalDevice(voltage, currentStrength){
    // включен ли электроприбор в розетку
    this.isActive = 'электроприбор выключен';
    // напряжение электроприбора в вольтах
    this.voltage = voltage;
    // сила тока электроприбора в амперах
    this.currentStrength = currentStrength;
}


// добавим методы к родительской функции-конструктору
ElectricalDevice.prototype.turnOff = function(){
    this.isActive = 'электроприбор выключен';
    console.log(`Выключение электроприбора из розетки...\n ${this.isActive}`);
};

ElectricalDevice.prototype.turnOn = function(){
    this.isActive = 'электроприбор включен';
    console.log(`Включение электроприбора в розетку...\n${this.isActive}`);
};

ElectricalDevice.prototype.getPower = function(){
    console.log(`Потребляемая мощность электроприбора - ${this.voltage * this.currentStrength} Вт`);
};


// дочений объект
function Laptop(voltage, currentStrength, model, videoCard){
    ElectricalDevice.call(this, voltage, currentStrength);
    // собственные свойства 'модель ноутбука' и 'видеокарта'
    this.model = model;
    this.videoCard = videoCard;
}


// установка делегирующей связи с восстановлением конструктора
Laptop.prototype = Object.create(ElectricalDevice.prototype);
Laptop.prototype.constructor = Laptop;


// собственные методы дочернего объекта ноутбука
Laptop.prototype.startGame = function(){
    console.log('Вы запустили игру "Machinarium"...наигрались, вышли)');
};


// дочерний объект 
function TableLamp(voltage, currentStrength, type){
    ElectricalDevice.call(this, voltage, currentStrength);
    // собственное свойство 'тип настольной лампы'
    this.type = type;
}


// установка делегирующей связи с восстановлением конструктора
TableLamp.prototype = Object.create(ElectricalDevice.prototype);
TableLamp.prototype.constructor = TableLamp;


// пример использования с Ноутбуком
let laptopObj = new Laptop(15, 3, 'Asus rog strix G17', 'MSI RTX3050');
console.log(laptopObj.isActive);
console.log('-'.repeat(30));
laptopObj.turnOn();
console.log('-'.repeat(30));
console.log(laptopObj.isActive);
console.log('-'.repeat(30));
laptopObj.startGame();
console.log('-'.repeat(30));
laptopObj.getPower()


// пример использования с Настольной лампой
console.log('\n\n')
let tableLampObj = new TableLamp(voltage=25, currentStrength=0.45, type='декоративная настольная лампа')
console.log(tableLampObj.isActive);
console.log('-'.repeat(30));
tableLampObj.turnOn();
console.log('-'.repeat(30));
console.log(tableLampObj.isActive);
console.log('-'.repeat(30));
console.log(tableLampObj.type)
console.log('-'.repeat(30));
tableLampObj.getPower();