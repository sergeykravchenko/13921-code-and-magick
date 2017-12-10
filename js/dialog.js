'use strict';

window.dialog = (function () {
  var wizardDialog = document.querySelector('.setup');
  var wizardSetupOpen = document.querySelector('.setup-open');
  var wizardSetupClose = wizardDialog.querySelector('.setup-close');
  var wizardSubmit = wizardDialog.querySelector('.setup-submit');
  var wizardName = wizardDialog.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (!window.util.isFocused(wizardName)) {
      window.util.pressedEsc(evt, closePopup);
    }
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
    window.util.pressedEnter(evt, openPopup);
  });

  wizardSetupClose.addEventListener('click', function () {
    closePopup();
  });

  wizardSetupClose.addEventListener('keydown', function (evt) {
    window.util.pressedEnter(evt, closePopup);
  });

  wizardSubmit.addEventListener('click', function (evt) {
    evt.preventDefault();
    closePopup();
  });
})();
