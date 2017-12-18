'use strict';

(function () {
  var wizardSimilarTemplate = document.getElementById('similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardSimilarBlock = document.querySelector('.setup-similar');
  var wizardSimilarList = wizardSimilarBlock.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var wizardElement = wizardSimilarTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  function successHandler(wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
      wizardSimilarList.appendChild(fragment);
    }

    window.util.removeClass(wizardSimilarBlock, 'hidden');
  }

  window.backend.load(successHandler, window.backend.showError);
})();
