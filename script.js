console.log('go')
// Мінімум

// 1Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// 1.Метод, який виводить на екран інформацію про автомобіль.
// 2.Додавання ім’я водія у список
// 3. Перевірка водія на наявність його ім’я у списку
// 4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

const newCar = {
    make: 'Toyota',
    model: 'Hilux',
    year: 2020,
    speed: 180,
    tank: 80,
    costFuel: 10,
    drivers: ['John', 'Dou'],
    type: "pickup",
    description(){
        console.log(`make: ${this.year}, model: ${this.model}, year: ${this.year}, speed: ${this.speed} km/h, tank:${this.tank}l, cost fuel: ${this.costFuel}, type:${this.type}, drivers: ${this.drivers.join(", ")}`)
    }
}

class Car {
    constructor(make, model, year, speed, tank, costFuel, ...drivers) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = speed;
        this.tank = tank;
        this.costFuel = costFuel;
        this.drivers = [...drivers];
        this.type = "pickup";
    }

    description() {
        console.log(`make: ${this.year}, model: ${this.model}, year: ${this.year}, speed: ${this.speed} km/h, tank:${this.tank}l, cost fuel: ${this.costFuel}, type:${this.type}, drivers: ${this.drivers.join(", ")}`)
    };
}

const toyota = new Car("Toyota", "Hilux", 2020, 180, 80, 10, "John", "Doe");

toyota.description()
newCar.description()
