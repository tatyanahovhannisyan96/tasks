function rectArea(rect1, rect2) {
    const area1 = rect1.width * rect1.height;
    const area2 = rect2.width * rect2.height;

    return area1 === area2;
}

const rectangle1 = {
    width: 5,
    height: 10,
};

const rectangle2 = {
    width: 10,
    height: 5,
};

const rectangle3 = {
    width: 6,
    height: 8,
};

console.log(rectArea(rectangle1, rectangle2));
console.log(rectArea(rectangle1, rectangle3));
