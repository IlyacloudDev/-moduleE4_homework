class  ElectricalDevice{
    constructor(voltage, currentStrength){
        // включен ли электроприбор в розетку
        this.isActive = 'электроприбор выключен';
        // напряжение электроприбора в вольтах
        this.voltage = voltage;
        // сила тока электроприбора в амперах
        this.currentStrength = currentStrength;
    }
    turnOff(){
        this.isActive = 'электроприбор выключен';
        console.log(`Выключение электроприбора из розетки...\n ${this.isActive}`);
    }
    turnOn(){
        this.isActive = 'электроприбор включен';
        console.log(`Включение электроприбора в розетку...\n${this.isActive}`);
    }
    getPower(){
        console.log(`Потребляемая мощность электроприбора - ${this.voltage * this.currentStrength} Вт`);
    }    
}


class Laptop extends ElectricalDevice{
    constructor(model, videoCard, voltage, currentStrength){
        super(voltage, currentStrength);
        // собственные свойства 'модель ноутбука' и 'видеокарта'
        this.model = model;
        this.videoCard = videoCard;
    }
    startGame(){
        console.log('Вы запустили игру "Machinarium"...наигрались, вышли)');
    }
}


class TableLamp extends ElectricalDevice{
    constructor(type, voltage, currentStrength){
        super(voltage, currentStrength);
        // собственное свойство 'тип настольной лампы'
        this.type = type;
    }
}


// пример использования с Ноутбуком
let laptopObj = new Laptop('Asus rog strix G17', 'MSI RTX3050', 15, 3);
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
let tableLampObj = new TableLamp('декоративная настольная лампа', 25, 0.45)
console.log(tableLampObj.isActive);
console.log('-'.repeat(30));
tableLampObj.turnOn();
console.log('-'.repeat(30));
console.log(tableLampObj.isActive);
console.log('-'.repeat(30));
console.log(tableLampObj.type)
console.log('-'.repeat(30));
tableLampObj.getPower();
