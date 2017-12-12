'use strict';

(function () {
  var wizardSimilarTemplate = document.getElementById('similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardSimilarBlock = document.querySelector('.setup-similar');
  var wizardSimilarList = wizardSimilarBlock.querySelector('.setup-similar-list');
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

  var wizards = [];

  for (var i = 0; i < 4; i++) {
    var probability = 0.5;
    var nameConcat;
    if (Math.random() >= probability) {
      nameConcat = window.util.getRandomFrom(WIZARD_NAMES) + ' ' + window.util.getRandomFrom(WIZARD_SURNAMES);
    } else {
      nameConcat = window.util.getRandomFrom(WIZARD_SURNAMES) + ' ' + window.util.getRandomFrom(WIZARD_NAMES);
    }
    wizards[i] = {
      name: nameConcat,
      coatColor: window.util.getRandomFrom(WIZARD_COATS),
      eyesColor: window.util.getRandomFrom(WIZARD_EYES)
    };
  }

  window.util.removeClass(wizardSimilarBlock, 'hidden');

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

  window.wizard = {
  };
})();