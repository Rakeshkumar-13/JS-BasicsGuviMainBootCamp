// Class - Movie 
//a. Constructor for the class Movie

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}


//b. The constructor above already sets the default value for the rating to "PG" when no rating is provided.

//c. Method getPG

function getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
}

//d.Creating an instance of the class Movie

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

//TypeScript class based on the given UML diagram for the Circle class

class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle[radius=${this.radius},color=${this.color}]`;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

//“person” class to hold all the details

class Person {
    constructor(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    // Getter methods
    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }

    getAddress() {
        return this.address;
    }

    // Setter methods
    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    setGender(gender) {
        this.gender = gender;
    }

    setAddress(address) {
        this.address = address;
    }

    // toString method to represent Person details as a string
    toString() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Address: ${this.address}`;
    }
}

// Example usage
const person1 = new Person("Rakesh", 25, "Male", "7,Peel Street,Lincoln, LN5 8AB");
console.log(person1.toString());

//class to calculate the Uber price in JS

class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
        this.bookingFee = bookingFee;
    }

    calculatePrice(distanceInMiles, timeInMinutes) {
        const fareWithoutBookingFee = this.baseFare + (this.costPerMile * distanceInMiles) + (this.costPerMinute * timeInMinutes);
        const totalFare = fareWithoutBookingFee + this.bookingFee;
        return totalFare;
    }
}

// Example usage
const uberCalculator = new UberPriceCalculator(2.5, 0.3, 1.5, 1.0); // Sample parameters
const distance = 5; // in miles
const time = 10; // in minutes
const price = uberCalculator.calculatePrice(distance, time);
console.log("The estimated Uber price is: $" + price.toFixed(2));




