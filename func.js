// Получаем элементы первой формы
const form1 = document.getElementById("form1"); 
const modal1 = document.getElementById("modal1");
const btn1 = document.getElementById("openModal1");
const close1 = document.querySelector("#modal1 .close");

// Получаем элементы второй формы
const form2 = document.getElementById("form2"); 
const modal2 = document.getElementById("modal2");
const btn2 = document.getElementById("openModal2");
const close2 = document.querySelector("#modal2 .close");

// Получаем элементы третьей формы
const form3 = document.getElementById("form3"); 
const modal3 = document.getElementById("modal3");
const btn3 = document.getElementById("openModal3");
const close3 = document.querySelector("#modal3 .close");

// Функция для открытия модального окна
function openModal(modalId) {
  document.getElementById(modalId).style.display = "grid";
}

// Функция для закрытия модального окна
function closeModal(modalId) {  
  document.getElementById(modalId).style.display = "none";
}

// Обработчики событий для кнопок
btn1.addEventListener("click", function() {
  openModal("modal1");
});

btn2.addEventListener("click", function() {
  openModal("modal2");
});

btn3.addEventListener("click", function() {
    openModal("modal3");
  });

// Обработчики событий для кнопок "X"
close1.addEventListener("click", function() {
  closeModal("modal1");
});

close2.addEventListener("click", function() {
  closeModal("modal2");
});

close3.addEventListener("click", function() {
    closeModal("modal3");
});

// Обработчик событий для закрытия модального окна при клике вне его области
window.addEventListener("click", function(event) {
  if (event.target === modal1 || event.target === modal2 || event.target === modal3) {
    closeModal(event.target.id); 
  }
});



// Закрываем модальное окно при нажатии на "X"


// Закрываем модальное окно при клике вне его области

function formatPhone(input) {
    // Форматирование в зависимости от длины номера
    if (input.value.length === 1) {
        input.value = '+' + input.value + ' (';
    } else if (input.value.length === 7) {
        input.value += ') ';
    } else if (input.value.length === 12) {
        input.value += "-";
    } else if (input.value.length === 15) {
        input.value += "-";
    }
  }
  
  
  
// Валидация формы и обработка отправки