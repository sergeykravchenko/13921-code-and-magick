'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var wizardSetup = document.querySelector('.setup');
var wizardSetupOpen = document.querySelector('.setup-open');
var wizardSetupClose = wizardSetup.querySelector('.setup-close');
var wizardSimilarTemplate = document.getElementById('similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardSimilarBlock = document.querySelector('.setup-similar');
var wizardSimilarList = wizardSimilarBlock.querySelector('.setup-similar-list');
var wizardCoatHandler = wizardSetup.querySelector('.setup-wizard .wizard-coat');
var wizardEyesHandler = wizardSetup.querySelector('.setup-wizard .wizard-eyes');
var wizardFireBallHandler = wizardSetup.querySelector('.setup-fireball-wrap');
var wizardName = wizardSetup.querySelector('.setup-user-name');
var wizardSubmit = wizardSetup.querySelector('.setup-submit');

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var WIZARD_COATS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var WIZARD_EYES = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var WIZARD_FIREBALLS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomInArray = function (array) {
  var RandomIndex = Math.floor(Math.random() * array.length);
  return RandomIndex;
};

var wizards = [];

for (var i = 0; i < 4; i++) {
  var nameRandomIndex = getRandomInArray(WIZARD_NAMES);
  wizards[i] = {
    name: WIZARD_NAMES[nameRandomIndex] + ' ' + WIZARD_SURNAMES[nameRandomIndex],
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

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && !wizardName.focused) {
    closePopup();
  }
};

var openPopup = function () {
  wizardSetup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  wizardSetup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

wizardSetupOpen.addEventListener('click', function () {
  openPopup();
});

wizardSetupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

wizardSetupClose.addEventListener('click', function () {
  closePopup();
});

wizardSetupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopup();
});

var getRandomColor = function (el, array) {
  if (el.tagName === 'use') {
    el.style.fill = array[getRandomInArray(array)];
  } else {
    el.style.background = array[getRandomInArray(array)];
  }
};

wizardCoatHandler.addEventListener('click', function () {
  getRandomColor(wizardCoatHandler, WIZARD_COATS);
});

wizardEyesHandler.addEventListener('click', function () {
  getRandomColor(wizardEyesHandler, WIZARD_EYES);
});

wizardFireBallHandler.addEventListener('click', function () {
  getRandomColor(wizardFireBallHandler, WIZARD_FIREBALLS);
});

wizardSimilarBlock.classList.remove('hidden');
