import {enableValidation} from './components/validate.js'
export {profileEditButton, profileName, content, imageContainer, popupButton, inputPosition, profileAvatar, inputName, updatePopup, imageName, elementTemplate, profilePosition, elements, creationForm, profileAddButton, mestoPopup, editorPopup, openingImagePopup, editingForm, deletePopup, closingPopupButtons}
const content = document.querySelector('.content');
const profileEditButton = content.querySelector('.profile__button_edit');
const profileAddButton = content.querySelector('.profile__button_add');
const editorPopup = document.querySelector('.popup_edit');
const mestoPopup = document.querySelector('.popup_mesto');
const closingPopupButtons = document.querySelectorAll('.popup__close');
const openingImagePopup = document.querySelector('.popup_image');
const editingForm = document.querySelector('[name="popup-edit"]');
const creationForm = document.querySelector('[name="popup-create"]');
const profileName = document.querySelector('.profile__name');
const elements = document.querySelector('.elements');
const profilePosition = document.querySelector('.profile__position');
const inputName = editingForm.querySelector('.popup__input_type_name');
const inputPosition = editingForm.querySelector('.popup__input_type_position');
const elementTemplate = document.querySelector('#element-template').content;
const imageContainer = document.querySelector('.popup__image-open');
const imageName = openingImagePopup.querySelector(".popup__image-name");
const deletePopup = document.querySelector('.popup_delete');
const updatePopup = document.querySelector('.popup_update');
const profileAvatar = document.querySelector('.profile__avatar');
const popupButton = document.querySelector('.popup__button');

export function openPopup(popup) {
    popup.classList.add('popup_opened');
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
}






/*Обработчик «отправки» формы редактирования*/
function formSubmitHandler(evt) {
    evt.preventDefault();
    const textInputName = inputName.value;
    const textInputPosition = inputPosition.value;
    profileName.textContent = textInputName;
    profilePosition.textContent = textInputPosition;
    closePopup(editorPopup);
}

editingForm.addEventListener('submit', formSubmitHandler);


//***********закрытие попап на эск и оверлей******************
function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpen = document.querySelector('.popup_opened')
        closePopup(popupOpen);
        document.removeEventListener('keyup', closePopupEsc);
    }
}

document.addEventListener('keydown', closePopupEsc);

function closePopupOwerlay(evt) {
    const popupOpen = document.querySelector('.popup_opened')
    closePopup(popupOpen);
    document.removeEventListener('click', closePopupOwerlay);
}

document.addEventListener('click', function(evt){
    if(evt.target.classList.contains('popup_opened')) {
        closePopupOwerlay(evt);
    }
});

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});