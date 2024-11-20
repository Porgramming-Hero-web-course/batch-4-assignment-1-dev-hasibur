{
  // problem-7
  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    // get current year
    currentYear() {
      return new Date().getFullYear();
    }

    // method to calculate the car's age
    getCarAge(): number {
      return this.currentYear() - this.year;
    }
  }

  const car = new Car("Honda", "Civic", 2018);
  car.getCarAge();

  console.log(
    `${car.getCarAge()} (assuming current year is ${car.currentYear()})`
  );
  //
}
