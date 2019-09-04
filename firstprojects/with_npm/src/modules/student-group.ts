import { Student } from './student';

const MAX_STUDENT_NB = 12;

export class StudentGroup {

    constructor(titi: number, private toto: number = 3) {
        this.toto = toto || titi;
    }

    coucou() {
        this.toto = 2;
    }
}


class Vehicle {
    constructor(public wheelNb: number) {
    }

    print() {
        console.log(this.wheelNb);
    }
}

class Car extends Vehicle {
    constructor(public color: string, wheelNumber: number = 4) {
        super(wheelNumber);
    }

}

class Bus extends Vehicle {
    constructor() {
        super(8);
    }

    buyTicket() {
    }

    print() {
        super.print();
        console.log('Je suis un bus');
    }
}

type Vehicles = Vehicle[];


const bus: Vehicle = new Bus();

bus.print();

const vehicles: Vehicles = [
    new Car('red'),
    new Car('blue', 6),
    new Bus,
    new Vehicle(3)
];
