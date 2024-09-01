console.log('go')
// Мінімум

// 1Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// 1.Метод, який виводить на екран інформацію про автомобіль.
// 2.Додавання ім’я водія у список
// 3. Перевірка водія на наявність його ім’я у списку
// 4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

const ford = {
    make: 'Ford',
    model: 'F-150',
    year: 2022,
    speed: 200,
    tank: 100,
    costFuel: 12,
    drivers: ['Alice', 'Bob'],
    type: "pickup",

    description() {
        console.log(`make: ${this.year}, model: ${this.model}, year: ${this.year}, speed: ${this.speed} km/h, tank:${this.tank}l, cost fuel: ${this.costFuel}l / 100km, type:${this.type}, drivers: ${this.drivers.join(", ")}`)
    },
    addDriver(newDriver) {
        // this.drivers.push(newDriver);
        this.drivers = [...this.drivers, newDriver];
    },
    findDriver(searchedDriver){
        const isDriver = this.drivers.includes(searchedDriver);
        console.log(isDriver?`search driver is here`:`driver ${searchedDriver} not found`)
    },
    wayToPoint(way){
        const timeCount = way / (this.speed/2);
        const fuelCount = timeCount * this.costFuel;
        const restTimes = Math.floor(timeCount/4);
        const fullTime = timeCount+restTimes;
        console.log(`in way ${fullTime.toFixed(2)}, and use ${fuelCount.toFixed(2)} l fuel`)
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
        console.log(`make: ${this.year}, model: ${this.model}, year: ${this.year}, speed: ${this.speed} km/h, tank:${this.tank}l, cost fuel: ${this.costFuel}l / 100km, type:${this.type}, drivers: ${this.drivers.join(", ")}`)
    };
    addDriver(newDriver) {
        this.drivers = [...this.drivers, newDriver]
    };
    findDriver(searchedDriver){
        const isDriver = this.drivers.includes(searchedDriver);
        console.log(isDriver?`search driver is here`:`driver ${searchedDriver} not found`)
    };
    wayToPoint(way){
        const timeCount = way / (this.speed/2);
        const fuelCount = timeCount * this.costFuel;
        const restTimes = Math.floor(timeCount/4);
        const fullTime = timeCount+restTimes;
        console.log(`in way ${fullTime.toFixed(2)}, and use ${fuelCount.toFixed(2)} l fuel`)
    }

}

const toyota = new Car("Toyota", "Hilux", 2020, 180, 80, 10, "John", "Doe");


toyota.addDriver('cat')
toyota.description();
toyota.findDriver('red')
toyota.wayToPoint(250)


ford.addDriver('vitia');
ford.description();
ford.findDriver('Bob');
ford.wayToPoint(900)

