'use strict';

var wizardSetup = document.querySelector('.setup');
var wizardSimilarTemplate = document.getElementById('similar-wizard-template').content.querySelector('.setup-similar-item');

// 1) Выше обратился по getElementById. На вебинаре Игорь советовал querySelector (скорее из за удобств как я понял)
// но например здесь https://github.com/nefe/You-Dont-Need-jQuery/blob/master/README-ru.md пишут:
// Заметка: document.querySelector и document.querySelectorAll достаточно МЕДЛЕННЫ,
// старайтесь использовать getElementById,
// document.getElementsByClassName или document.getElementsByTagName
// если хотите улучшить производительность.
// Чем лучше в итоге искать?

var wizardSimilarBlock = document.querySelector('.setup-similar');
var wizardSimilarList = wizardSimilarBlock.querySelector('.setup-similar-list');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomInArray = function (array) {
  var RandomIndex = Math.floor(Math.random() * array.length);
  return RandomIndex;
};

var wizards = [];

for (var i = 0; i < 4; i++) {
  var nameRandomIndex = getRandomInArray(WIZARD_NAMES);
  wizards[i] = {
    name: WIZARD_NAMES[nameRandomIndex] + ' ' + WIZARD_SURNAMES[nameRandomIndex],

    // 2) Не понял толком из задания - нужно ли было делать, чтобы имена и фамилии совпадали, т.е. рандомный индекс массива каждого имени
    // был такой же в массиве фамилий внутри одной итерации?
    // если нет - то вариант cо случайными фамилиями для имен у меня:
    // name: WIZARD_NAMES[getRandomInArray(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomInArray(WIZARD_SURNAMES)],
    // какой оставлять?

    // 3) Про задание по желанию - можно переставлять фамилии и имена местами - пока не имею представления каким образом это сделатьы?

    coatColor: WIZARD_COATS[getRandomInArray(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[getRandomInArray(WIZARD_EYES)]
  };
}

var renderWizard = function (wizard) {
  var wizardElement = wizardSimilarTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
  wizardSimilarList.appendChild(fragment);
}

// 4) Где практически нужен этот подход с темплейтами, если всё перегоняют обычно в php?

// 5) Аналогичный вопрос по прошлому заданию про канвас - где и как часто их используют на практике?
// Ведь в основном все делают на свг с js библиотеками для их анимирования

// 6) Что еще вынести в функции пока не знаю, вернее наверно можно вынести в отдельные функции создание массива из объектов и фрагмент
// но пока туплю и не догоняю, что я буду возвращать в конце каждй из этих функций и как буду использовать это потом в других конструкциях

wizardSetup.classList.remove('hidden');
wizardSimilarBlock.classList.remove('hidden');
