function getCars(cars, make) {
    return cars.filter(car => car.make === make);
}

const cars = [
    {
        make: "Toyota",
        model: "Corolla",
        year: 2022,
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2023,
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2021,
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2023,
    },
    {
        make: "Chevrolet",
        model: "Silverado",
        year: 2022,
    },
    {
        make: "Toyota",
        model: "Rav4",
        year: 2023,
    },
];

console.log(getCars(cars, "Toyota"));
