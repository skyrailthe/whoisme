

// Функция для изменения содержимого элемента с ID "routes"
function loadHomeContent() {
    // Находим элемент с ID "routes"
    const routesElement = document.getElementById('routes');

    // HTML-контент для home
    const homeContent = `
        <div class="home_main_info">
            <img class="home_img" src="./img/home/dance.gif" alt="Image">
            <h2 class="home_descr">Тут буде якийсь опис, можливо, як грати в цю гру чи ще щось...</h2>
            <h2 class="home_descr">А поки Ви можете обрати один з фандомів зверху і почати гру.</h2>
        </div>
        `;

    // Вставляем HTML-код в элемент
    routesElement.innerHTML = homeContent;
}
// Вызываем функцию при загрузке страницы
window.addEventListener('load', loadHomeContent);

// Функция для обработки клика и загрузки контента
async function fetchData() {
    try {
        const response = await fetch('content/characters/data.json'); // Обновите путь к файлу
        if (!response.ok) {
            throw new Error('Ошибка при загрузке контента');
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
}

async function findcontent(event) {
    const elementId = event.target.id;

    // Загружаем данные из data.json
    const data = await fetchData();
    if (!data) return; // Если данные не загружены, прерываем выполнение функции

    // Проверяем, есть ли данные по данному id
    if (data[elementId]) {
        let htmlContent = '<ul class="content"><div id="gallery-0">';

        data[elementId].forEach((item, index) => {
            htmlContent += `
                <li>
                    <input type="checkbox" id="i${index + 1}" /> 
                    <label for="i${index + 1}"> 
                        <img class="${elementId}" src="./img/${elementId}/${index + 1}.webp" alt="${index + 1}. ${item}"> 
                        <div class="NameChar">${index + 1}. ${item}</div> 
                    </label>
                </li>`;
        });

        htmlContent += '</div></ul>';

        // Записываем HTML в элемент с id "routes"
        const routesElement = document.getElementById('routes');
        routesElement.innerHTML = htmlContent;
    } else {
        console.error('Нет данных для данного id');
    }
}
