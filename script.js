document.addEventListener("DOMContentLoaded", function() {
    // Получаем язык браузера
    const userLang = navigator.language || navigator.userLanguage;

    // Проверяем, начинается ли язык с "ru"
    if (!userLang.startsWith("ru")) {
        // Переадресуем на другую страницу
        window.location.href = "index-en.html"; // Замените на необходимый URL
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if(sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});

async function fetchGitHubData() {
    const response = await fetch('https://api.github.com/users/iteterin'); // замените 'username' на ваш ник в GitHub
    const data = await response.json();
    
	
		
			

    // Здесь вы можете обновить данные на странице с использованием полученного профиля
    document.querySelector('.header h1').innerHTML += `${data.name}`;
    // document.querySelector('.header p').innerText += `${data.bio}`;

    document.querySelector('.main p').innerHTML += `<div class="circle-image"><img src=${data.avatar_url} /></div>`;
}

fetchGitHubData();

const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const characters = 'ぁぜぞげおはスベネダタメヹワヱヰンポバホタェろ゛ゞゟキᛯᛉᛔᛖᛗᚻᚺᚢᚧᚨᚩᚶᚷᚾᚼᚻᚸᛐᛑᛒᛓᛡᛪᛨABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789丒乖乺了亂仑仪仧傺傡傠傞abcdefghijklmnopqrstuvwxyzㆃㆄㅫㅎㅙㅘㅀㅖㅊㅰㅽㅾㅄㄸㄹﯕﮜﭶﭫﭟﭓﺝﺹﺸ';
const fontSize = 10;
const columns = Math.floor(canvas.width / fontSize);
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = Math.floor(Math.random() * canvas.height);
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';  // Полупрозрачный черный
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Затемняем экран

    ctx.fillStyle = '#390'; // Зеленый цвет текста
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0; // Сбросить в начале
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 33);

        // Получаем элемент ссылки
        const link = document.getElementById('Link');

        // Добавляем обработчик события на клик
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Отменяет действие по умолчанию (переход по ссылке)
            this.classList.toggle('clicked'); // Переключаем класс 'clicked'
            setTimeout(() => {
                window.location.href = this.href; // Переход по адресу ссылки
            }, 500);
        });

/*============================================================================ */
