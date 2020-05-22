const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const p = document.querySelector('p')

function Meals(name, price) {
    this.name = name;
    this.price = price;
};

Meals.prototype.menu = function () {
    p.innerText = `${this.name} costs ${this.price}$`;
}

const meal1 = new Meals('Beaver soup', 16);
const meal2 = new Meals('wodzionka', 6);
const meal3 = new Meals('potato salad', 11);

btn1.addEventListener('click', () => {
    meal1.menu();
});

btn2.addEventListener('click', () => {
    meal2.menu();
});

btn3.addEventListener('click', () => {
    meal3.menu();
});