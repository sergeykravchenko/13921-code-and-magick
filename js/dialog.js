'use strict';

window.dialog = (function () {
  var wizardDialog = document.querySelector('.setup');
  var wizardSetupOpen = document.querySelector('.setup-open');
  var wizardSetupClose = wizardDialog.querySelector('.setup-close');
  var wizardSubmit = wizardDialog.querySelector('.setup-submit');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    wizardDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    wizardDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  wizardSetupOpen.addEventListener('click', function () {
    openPopup();
  });

  wizardSetupOpen.addEventListener('keydown', function (evt) {
    window.util.isEscEvent(evt, openPopup);
  });

  wizardSetupClose.addEventListener('click', function () {
    closePopup();
  });

  wizardSetupClose.addEventListener('keydown', function (evt) {
    window.util.isEscEvent(evt, closePopup);
  });

  wizardSubmit.addEventListener('click', function (evt) {
    evt.preventDefault();
    closePopup();
  });
})();
