'use strict';

(function () {
  var wizardDialog = document.querySelector('.setup');
  var wizardForm = wizardDialog.querySelector('.setup-wizard-form');
  var wizardSetupOpen = document.querySelector('.setup-open');
  var wizardSetupClose = wizardDialog.querySelector('.setup-close');
  var wizardSubmit = wizardDialog.querySelector('.setup-submit');
  var wizardName = wizardDialog.querySelector('.setup-user-name');
  var dialogHandle = wizardDialog.querySelector('.setup-user-pic');

  var onPopupEscPress = function (evt) {
    if (!window.util.isFocused(wizardName)) {
      window.util.pressedEsc(evt, closePopup);
    }
  };

  var openPopup = function () {
    wizardDialog.classList.remove('hidden');
    wizardDialog.removeAttribute('style');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    wizardDialog.classList.add('hidden');
    wizardDialog.removeAttribute('style');
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

  wizardSubmit.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(wizardForm), window.backend.addClass(wizardDialog, 'hidden'), window.backend.showError);
    evt.preventDefault();
  });

  dialogHandle.addEventListener('mousedown', dragAndDrop);

  function dragAndDrop(evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      wizardDialog.style.top = (wizardDialog.offsetTop - shift.y) + 'px';
      wizardDialog.style.left = (wizardDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };


    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
})();
