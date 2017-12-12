'use strict';

window.setup = (function () {
  var wizardSetup = document.querySelector('.setup');
  var wizardCoatHandler = wizardSetup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyesHandler = wizardSetup.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireBallHandler = wizardSetup.querySelector('.setup-fireball-wrap');

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

  var getRandomColor = function (el, array) {
    if (el.tagName === 'use') {
      el.style.fill = window.util.getRandomFromOnce(array)();
    } else {
      el.style.background = window.util.getRandomFromOnce(array)();
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
})();
