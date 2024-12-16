showMessage("Скрипт загружен!");
logCurrentTime();
alert("Нужно для того чтобы показать работу изменения цвета")
function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

const zag = document.getElementById('h1zag');

zag.addEventListener('click', () => {
    alert("Вы кликнули на заголовок - так держать!")
})

const originalTopics = [
    "Основы языка HTML",
    "Углубленное изучение HTML",
    "Основы работы с CSS",
    "Адаптивная верстка. Flexbox и Grid Layout",
    "Bootstrap - работа с фреймворков",
    "Основы языка JavaScript",
    "Работа с DOМ и событиями в JavaScript",
    "Работа с DOМ и событиями в JavaScript",
    "Работа с DOМ и событиями в JavaScript",
    "Работа с DOМ и событиями в JavaScript",
    "Работа с DOМ и событиями в JavaScript",
    "Работа с DOМ и событиями в JavaScript"
  ];

const newTopics = [
    "Базовое бэкенд-приложение",
    "HTTP-запросы",
    "JSON и работа с ним",
    "HTTP-ответы",
    "Проектирование API",
    "Роутинг и его настройка",
    "NoSQL базы данных",
    "Обеспечение авторизации и доступа пользователей",
    "Работа сторонних сервисов уведомления и авторизации",
    "Основы ReactJS",
    "Работа с компонентами динамической DOM",
    "Использование хуков в React"
  ];

document.getElementById('changeData').addEventListener('click', function() {
  for (let i = 0; i < 12; i++) {
    document.getElementById(`topic${i+1}`).textContent = newTopics[i];
  }
});

document.getElementById('revertData').addEventListener('click', function() {
  for (let i = 0; i < 12; i++) {
    document.getElementById(`topic${i+1}`).textContent = originalTopics[i];
  }
});



function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = (element.style.display === 'none') ? 'block' : 'none';
    }
}

function updateHeadingWithUTM() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1Element = document.querySelector('h1');

    if (h1Element && utmTerm) {
        h1Element.textContent = utmTerm;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    resetBackgroundColor(); // Устанавливаем фон в белый цвет
    changeBackgroundColor("lightblue"); // Меняем фон
    toggleVisibility('.content'); // Переключаем видимость элемента
    updateHeadingWithUTM(); // Обновляем текст заголовка, если utm_term указан
});

function logCurrentTime() {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0]; // "HH:MM:SS"
    console.log('Текущее время: ' + timeString);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

//13
const studentImage = document.getElementById('student-image'); // Replace 'student-image' with the ID of your image

if (studentImage) {
  studentImage.addEventListener('mouseover', () => {
    const currentWidth = studentImage.offsetWidth;
    const currentHeight = studentImage.offsetHeight;
    studentImage.style.width = `${currentWidth * 1.1}px`; // Increase width by 10%
    studentImage.style.height = `${currentHeight * 1.1}px`; // Increase height by 10%
  });

  studentImage.addEventListener('mouseout', () => {
    //Optional: Reset size on mouseout.  Remove this block if you want the image to stay enlarged.
    studentImage.style.width = '';
    studentImage.style.height = '';
  });


  studentImage.addEventListener('click', () => {
    studentImage.src = 'img/bomb.png'; // Replace 'teacher.jpg' with the URL/path to the teacher's image
    //Optional:  Add a loading indicator if the image takes time to load.
  });

  studentImage.addEventListener('dblclick', () => {
    alert('Не налегай, у меня не так много любимых преподавателей');
  });
} else {
  console.error("Image element with ID 'student-image' not found.");
}



//14
document.querySelector('.content').addEventListener('click', function () {
    this.classList.toggle('active');
  });
  

  
  document.getElementById('student-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const messageEl = document.getElementById('message');
    messageEl.textContent = "Форма отправлена!";
    messageEl.style.transition = "color 0.5s ease";
    messageEl.style.color = "green"; // выбираем цвет который тебе по душе
  });
  
  document.getElementById('show-lectures').addEventListener('click', function () {
    const lectures = document.getElementById('lectures');
    if (lectures.classList.contains('show')) {
      lectures.classList.remove('show');
      lectures.style.display = 'none';
    } else {
      lectures.classList.add('show');
      lectures.style.display = 'block';
    }  
  });
  
    


// 1. Посмотреть консоль в F12  
// 2.  добавить к ссылке ?utm_source=yandex&utm_medium=cpc&utm_campaign=spring_sale&utm_term=сапоги 
// 3. Кликнуть на h1 