const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const closeBtn = document.getElementsByClassName("close")[0];
function openModal(service) {
    modalTitle.textContent = `Форма обратной связи для ${service}`; 
    modal.style.display = "block"; // Показываем модальное окно
}
closeBtn.onclick = function() {
    modal.style.display = "none"; 
}
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; 
    }
}
const buttons = document.querySelectorAll(".open-modal");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const service = button.getAttribute("data-service"); 
        openModal(service);
    });
});
$(document).ready(function() {
    $('#phone-input').mask('+7 (000) 000-00-00');
});
const [name, age] = [prompt("ИМЯ:"), prompt("СКОЛЬКО ЛЕТ???:")];

console.log("Name:", name);
console.log("Age:", age);

if (age >= 18) {
    alert("Привет"+ "\nName: " + name + "\nAge: " + age + "\nадулт");
} else {
    alert("првиетки"+ "\nName: " + name + "\nAge: " + age + "\nнеадулт");
}
const randomnum = Math.floor(Math.random() * 10) + 1;
console.log(randomnum);
const num=prompt("введите от 1 до 10")
if (num == randomnum){
    alert("Ура угадали")
}else{
    if(num>5){
        alert("Your number > 5")
    }else{
        alert("Your number < 5")
    }
}
const password=prompt("Введите пароль")
const prepassword = 123;
if (password && password.trim() !== "") {
    if(password == prepassword){
        alert("Дотсур разрешен")
    }else{
        alert("доступ запрещен")
    }
} else {
    alert("введите");
}
const firstNumber = prompt("ПЕРОВЕ ЧИСЛО!!");
const secondNumber = prompt("В ТАРОЕ ЧИЛСО:");
const operator = prompt("Введите оператор +, -, *, /");
const num1 = parseFloat(firstNumber);
const num2 = parseFloat(secondNumber);
if (!isNaN(num1) && !isNaN(num2)) {
    let result;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            alert("Ошибка: Деление на ноль.");
        }
    } else {
        alert("Неверный оператор.");
    }

    if (result !== undefined) {
        alert("Результат: " + result);
    }
} else {
    alert("Ошибка: Введены некорректные числа.");
}

//tetrad 10
for(let i=1; i < 11; i++){
    console.log(i)
}

let i=10
while(i>0){
    console.log(i)
    i--
}

const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
const practices = ['Практика 1', 'ОПрактика 2', 'Практика 3'];
console.log(lectures);
console.log(practices);

lectures.push("Тема 4")
practices.unshift("Практика 0")

lectures.forEach(element => {
    console.log(element);
});
practices.forEach(element => {
    console.log(element);
});

function arrayToString(array) {
    if (Array.isArray(array)) {
        const result = array.join(", ");
        console.log(result); 
    } else {
        console.log("Ошибка: Входной аргумент не является массивом.");
    }
}
arrayToString(lectures);

function filter(array) {
    const result = array.filter(item => item.startsWith("О"));
    return result;
}
const filteredArray = filter(practices);
console.log(filteredArray);
//11
function submitForm() {
    const formData = new FormData();

    const name = document.querySelector('input[type="text"][required]').value.trim();
    const email = document.getElementById('floatingInput').value.trim();
    const phone = document.getElementById('phone-input').value.trim();
    const date = document.querySelector('input[type="date"]').value;
    const comment = document.querySelector('textarea').value.trim();
    const consent = document.querySelector('input[type="checkbox"]').checked;

    if (!name || !email) {
        alert("Поля 'Имя', 'E-mail' не должны быть пустыми.");
        return;
    }

    if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone)) {
        alert("Телефон должен быть в формате +7 (000) 000-00-00.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Введите корректный e-mail.");
        return;
    }

    if (!consent) {
        alert("Вы должны дать согласие на обработку данных.");
        return;
    }

    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('date', date);
    formData.append('comment', comment);

    formData.printData = function() {
        console.log(`Name: ${this.get('name')}`);
        console.log(`E-mail: ${this.get('email')}`);
        console.log(`Phone: ${this.get('phone')}`);
        console.log(`Date: ${this.get('date')}`);
        console.log(`Comment: ${this.get('comment')}`);
    };

    formData.printData();
    modal.style.display = "none";
}

document.querySelector('.aply').addEventListener('click', submitForm);
