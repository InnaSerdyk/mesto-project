const content = document.querySelector('.content');
const editButton = content.querySelector('.profile__edit-button');
const profileButton = content.querySelector('.profile__button');
const openPopup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const closePopupMesto = document.querySelector('.popup__close-mesto');
const openPopupMesto = document.querySelector('.popup-mesto');


const saveButton = document.querySelector('.popup__button');
const editForm = document.querySelector('[name="edit-form"]');

/*открытие и закрытие попап edit*/
editButton.addEventListener('click', function popupOpened() {
    openPopup.classList.add('popup_opened');
});
closePopup.addEventListener('click', function popupClose() {
    openPopup.classList.remove('popup_opened');
})

/*открытие и закрытие попап add*/
profileButton.addEventListener('click', function popupOpened() {
    openPopupMesto.classList.add('popup-mesto_opened');
});
closePopupMesto.addEventListener('click', function popupClose() {
    openPopupMesto.classList.remove('popup-mesto_opened');
})

const inputName = editForm.querySelector('.popup__input_type_name');
const inputPosition = editForm.querySelector('.popup__input_type_position');

/*Обработчик «отправки» формы*/
function formSubmitHandler (evt) {
    evt.preventDefault();
    const profileName = document.querySelector('.profile__name');
    const profilePosition = document.querySelector('.profile__position');
    const textInputName = inputName.value;
    const textInputPosition = inputPosition.value;

    profileName.textContent = textInputName;
    profilePosition.textContent = textInputPosition;

    openPopup.classList.remove('popup_opened');
}

editForm.addEventListener('submit', formSubmitHandler);


