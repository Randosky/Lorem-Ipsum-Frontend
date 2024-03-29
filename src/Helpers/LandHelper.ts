import landStore from "../Store/LandStore";

export const categoryOptions = [
    "Земли сельскохозяйственного назначения",
    "Земли населенных пунктов",
    "Земли промышленности и иного специального назначения",
    "Земли иного специального назначения",
    "Земли особо охраняемых территорий и объектов",
    "Земли лесного фонда",
    "Земли водного фонда",
    "Земли запаса",
]
export const objectOptions = ["Пустырь", "Дом", "Завод", "Гараж"]
export const searchChannelOptions = ["Аукцион", "Сторонний источник"]


// export const restrictionsOptions = [
//     "Ипотека",
//     "Арест",
//     "Запрет на совершение регистрационных действий",
//     "Рента",
//     "Сервитут",
//     "Аренда",
//     "Доверительное управление",
//     "Право на безвозмездное пользование",
// ]
//
// export const permittedUseOptions = [
//     "Сельскохозяйственное использование",
//     "Жилая застройка",
//     "Общественное использование объектов капитального строительства",
//     "Предпринимательство",
//     "Отдых (рекреация)",
//     "Производственная деятельность",
//     "Транспорт",
//     "Обеспечение обороны и безопасности",
//     "Деятельность по особой охране и изучению природы",
//     "Использование лесов",
//     "Водные объекты",
//     "Земельные участки (территории) общего пользования",
//     "Земельные участки (территории) общего назначения",
// ]

export const getCurrentEditTitle = (title: string | undefined) => {
    switch (title) {
        case "Основная информация":
            return "Редактирование основной информации"
        case "Юридические сведения":
            return "Редактирование юридических сведений"
        case "Дополнительная информация":
            return "Редактирование дополнительной информации"
        case "Задачи":
            return "Создание задачи"
        case "Редактирование задачи":
            return "Редактирование задачи"
        case "Информация об объектах":
            return "Создание объекта"
        case "Список объектов":
            return "Список объектов"
        case "Редактирование объекта":
            return "Редактирование объекта"
        case "Данные о правообладателях":
            return "Добавление правообладателя"
        case "Список правообладателей":
            return "Список правообладателей"
        case "Редактирование данных о правообладателе":
            return "Редактирование данных о правообладателе"
        default:
            return ""
    }
}


// export const permittedUseOptions = [
//     "Сельскохозяйственное использование",
//     "Растениеводство",
//     "Выращивание зерновых и иных сельскохозяйственных культур",
//     "Овощеводство",
//     "Выращивание тонизирующих, лекарственных, цветочных культур",
//     "Садоводство",
//     "Виноградарство",
//     "Выращивание льна и конопли",
//     "Животноводство",
//     "Скотоводство",
//     "Звероводство",
//     "Птицеводство",
//     "Свиноводство",
//     "Пчеловодство",
//     "Рыбоводство",
//     "Научное обеспечение сельского хозяйства",
//     "Хранение и переработка сельскохозяйственной продукции",
//     "Ведение личного подсобного хозяйства на полевых участках",
//     "Питомники",
//     "Обеспечение сельскохозяйственного производства",
//     "Сенокошение",
//     "Выпас сельскохозяйственных животных",
//     "Жилая застройка",
//     "Для индивидуального жилищного строительства",
//     "Малоэтажная многоквартирная жилая застройка",
//     "Для ведения личного подсобного хозяйства (приусадебный земельный участок)",
//     "Блокированная жилая застройка",
//     "Передвижное жилье",
//     "Среднеэтажная жилая застройка",
//     "Многоэтажная жилая застройка (высотная застройка)",
//     "Обслуживание жилой застройки",
//     "Хранение автотранспорта",
//     "Размещение гаражей для собственных нужд",
//     "Общественное использование объектов капитального строительства",
//     "Коммунальное обслуживание",
//     "Предоставление коммунальных услуг",
//     "Административные здания организаций, обеспечивающих предоставление коммунальных услуг",
//     "Социальное обслуживание",
//     "Дома социального обслуживания",
//     "Оказание социальной помощи населению",
//     "Оказание услуг связи",
//     "Общежития",
//     "Бытовое обслуживание",
//     "Здравоохранение",
//     "Амбулаторно-поликлиническое обслуживание",
//     "Стационарное медицинское обслуживание",
//     "Медицинские организации особого назначения",
//     "Образование и просвещение",
//     "Дошкольное, начальное и среднее общее образование",
//     "Среднее и высшее профессиональное образование",
//     "Культурное развитие",
//     "Объекты культурно-досуговой деятельности",
//     "Парки культуры и отдыха",
//     "Цирки и зверинцы",
//     "Религиозное использование",
//     "Осуществление религиозных обрядов",
//     "Религиозное управление и образование",
//     "Общественное управление",
//     "Государственное управление",
//     "Представительская деятельность",
//     "Обеспечение научной деятельности",
//     "Обеспечение деятельности в области гидрометеорологии и смежных с ней областях",
//     "Проведение научных исследований",
//     "Проведение научных испытаний",
//     "Ветеринарное обслуживание",
//     "Амбулаторное ветеринарное обслуживание",
//     "Приюты для животных",
//     "Предпринимательство",
//     "Деловое управление",
//     "Объекты торговли (торговые центры, торгово-развлекательные центры (комплексы)",
//     "Рынки",
//     "Магазины",
//     "Банковская и страховая деятельность",
//     "Общественное питание",
//     "Гостиничное обслуживание",
//     "Развлечение",
//     "Развлекательные мероприятия",
//     "Проведение азартных игр",
//     "Проведение азартных игр в игорных зонах",
//     "Служебные гаражи",
//     "Объекты дорожного сервиса",
//     "Заправка транспортных средств",
//     "Обеспечение дорожного отдыха",
//     "Автомобильные мойки",
//     "Ремонт автомобилей",
//     "Стоянка транспортных средств",
//     "Выставочно-ярмарочная деятельность",
//     "Отдых (рекреация)",
//     "Спорт",
//     "Обеспечение спортивно-зрелищных мероприятий",
//     "Обеспечение занятий спортом в помещениях",
//     "Площадки для занятий спортом",
//     "Оборудованные площадки для занятий спортом",
//     "Водный спорт",
//     "Авиационный спорт",
//     "Спортивные базы",
//     "Природно-познавательный туризм",
//     "Туристическое обслуживание",
//     "Охота и рыбалка",
//     "Причалы для маломерных судов",
//     "Поля для гольфа или конных прогулок",
//     "Производственная деятельность",
//     "Недропользование",
//     "Тяжелая промышленность",
//     "Автомобилестроительная промышленность",
//     "Легкая промышленность",
//     "Фармацевтическая промышленность",
//     "Фарфоро-фаянсовая промышленность",
//     "Электронная промышленность",
//     "Ювелирная промышленность",
//     "Пищевая промышленность",
//     "Нефтехимическая промышленность",
//     "Строительная промышленность",
//     "Энергетика",
//     "Атомная энергетика",
//     "Связь",
//     "Склад",
//     "Складские площадки",
//     "Обеспечение космической деятельности",
//     "Целлюлозно-бумажная промышленность",
//     "Научно-производственная деятельность",
//     "Транспорт",
//     "Железнодорожный транспорт",
//     "Железнодорожные пути",
//     "Обслуживание железнодорожных перевозок",
//     "Автомобильный транспорт",
//     "Размещение автомобильных дорог",
//     "Обслуживание перевозок пассажиров",
//     "Стоянки транспорта общего пользования",
//     "Водный транспорт",
//     "Воздушный транспорт",
//     "Трубопроводный транспорт",
//     "Внеуличный транспорт",
//     "Обеспечение обороны и безопасности",
//     "Обеспечение вооруженных сил",
//     "Охрана Государственной границы Российской Федерации",
//     "Обеспечение внутреннего правопорядка",
//     "Обеспечение деятельности по исполнению наказаний",
//     "Деятельность по особой охране и изучению природы",
//     "Охрана природных территорий",
//     "Сохранение и репродукция редких и (или) находящихся под угрозой исчезновения видов животных",
//     "Курортная деятельность",
//     "Санаторная деятельность",
//     "Историко-культурная деятельность",
//     "Использование лесов",
//     "Заготовка древесины",
//     "Лесные плантации",
//     "Заготовка лесных ресурсов",
//     "Резервные леса",
//     "Водные объекты",
//     "Общее пользование водными объектами",
//     "Специальное пользование водными объектами",
//     "Гидротехнические сооружения",
//     "Земельные участки (территории) общего пользования",
//     "Улично-дорожная сеть",
//     "Благоустройство территории",
//     "Ритуальная деятельность",
//     "Специальная деятельность",
//     "Запас",
//     "Земельные участки общего назначения",
//     "Ведение огородничества",
//     "Ведение садоводства",
//     "Земельные участки, входящие в состав общего имущества собственников индивидуальных жилых домов в малоэтажном жилом комплексе"]