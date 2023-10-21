function getAverageAge(arr) {
    const sum = arr.reduce((sum, user) => sum + user.age, 0);
    const averageAge = sum / arr.length;
    return averageAge;
}

const users = [
    {
        name: "John Doe",
        age: 30,
        isAdmin: false,
    },
    {
        name: "Jane Smith",
        age: 25,
        isAdmin: true,
    },
    {
        name: "Bob Johnson",
        age: 40,
        isAdmin: false,
    },
];

getAverageAge(users);