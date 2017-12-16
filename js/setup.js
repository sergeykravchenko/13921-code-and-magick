'use strict';

(function () {
  var wizardSetup = document.querySelector('.setup');
  var wizardCoatHandler = wizardSetup.querySelector('.wizard-coat');
  var wizardEyesHandler = wizardSetup.querySelector('.wizard-eyes');
  var wizardFireBallHandler = wizardSetup.querySelector('.setup-fireball-wrap');
  var shop = document.querySelector('.setup-artifacts-shop');
  var artifactsArea = document.querySelector('.setup-artifacts');
  var draggedItem = null;
  var draggedItemClone = null;


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

  // var getRandomColor = function (el, array) {
  //   if (el.tagName === 'use') {
  //     el.style.fill = window.util.getRandomFromOnce(array)();
  //   } else {
  //     el.style.background = window.util.getRandomFromOnce(array)();
  //   }
  // };

  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  wizardCoatHandler.addEventListener('click', function () {
    // getRandomColor(wizardCoatHandler, WIZARD_COATS);
    window.colorizeElement(wizardCoatHandler, WIZARD_COATS, fillElement);
  });

  wizardEyesHandler.addEventListener('click', function () {
    // getRandomColor(wizardEyesHandler, WIZARD_EYES);
    window.colorizeElement(wizardEyesHandler, WIZARD_EYES, fillElement);
  });

  wizardFireBallHandler.addEventListener('click', function () {
    // getRandomColor(wizardFireBallHandler, WIZARD_FIREBALLS);
    window.colorizeElement(wizardFireBallHandler, WIZARD_FIREBALLS, changeElementBackground);
  });

  function dragStartArtifact(evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      draggedItemClone = draggedItem.cloneNode(true);
      artifactsArea.style.outline = '2px dashed red';
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  }

  function dragOverArtifact(evt) {
    evt.preventDefault();
    return false;
  }

  function dropArtifact(evt) {
    evt.target.style.backgroundColor = '';
    artifactsArea.style.outline = '';
    evt.target.appendChild(draggedItemClone);
    evt.preventDefault();
  }

  function dragenterArtifact(evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  }

  function dragleaveArtifact(evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  }

  shop.addEventListener('dragstart', dragStartArtifact);
  artifactsArea.addEventListener('dragover', dragOverArtifact);
  artifactsArea.addEventListener('drop', dropArtifact);
  artifactsArea.addEventListener('dragenter', dragenterArtifact);
  artifactsArea.addEventListener('dragleave', dragleaveArtifact);
})();
