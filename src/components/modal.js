import {profileEditButton, profileAddButton, mestoPopup, editorPopup, openPopup, closingPopupButtons} from '../mesto.js'

/*открытие попап*/
profileEditButton.addEventListener('click', function (evt) {
    const button = editorPopup.querySelector(".popup__button");
    // setSubmitButtonState(true, button);
    openPopup(editorPopup);
});

profileAddButton.addEventListener('click', function (evt) {
    openPopup(mestoPopup);
});

//закрытие попапа
closingPopupButtons.forEach(closingPopupButton =>
    closingPopupButton.addEventListener('click', (evt) => {
        closePopup(closingPopupButton.closest('.popup'));
    }));