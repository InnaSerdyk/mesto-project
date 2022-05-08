const content = document.querySelector('.content');
const editButton = content.querySelector('.profile__edit-button');
const profileButton = content.querySelector('.profile__button');
const openPopup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const closePopupMesto = document.querySelector('.popup__close-mesto');
const openPopupMesto = document.querySelector('.popup-mesto');
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
function formSubmitHandler(evt) {
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

/*Добавление карточек*/

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// function addCard(nameCard, linkCard) {
//     const cardContainer = document.createElement('div');
//     cardContainer.classList.add('element');
//
//     const cardImage = document.createElement('img');
//     cardImage.classList.add('element__image');
//     image.src = linkCard;
//     image.alt = nameCard;
//
//     const deleteButton = document.createElement('button');
//     deleteButton.classList.add('element__delete');
//
//     const nameElement = document.createElement('div');
//     nameElement.classList.add('element__name');
//
//     const nameParagraph = document.createElement('h2');
//     nameParagraph.classList.add('element__paragraph');
//     nameParagraph.textContent = nameCard;
//
//     const likeButton = document.createElement('button');
//     likeButton.classList.add('element__heart');
//
//     cardContainer.append(cardImage, deleteButton, nameElement,
//         nameParagraph, likeButton);
// }
//карточки через template
//???????????????
//initialCards.forEach()

initialCards.forEach(function (addCard) {
    const elementTemplate = document.querySelector('#element-template').content;
    const elementDiv = elementTemplate.querySelector('.element').cloneNode(true);
    const elements = document.querySelector('.elements');

    let elementImage = elementDiv.querySelector('.element__image');
    elementImage.setAttribute("src", addCard.link);
    elementImage.setAttribute("alt", addCard.name);
    elementDiv.querySelector('.element__paragraph').textContent = addCard.name;
    elements.append(elementDiv);

//удаление карточки
    const buttonDelete = elementDiv.querySelector('.element__delete');
    buttonDelete.addEventListener('click', function () {
        const CardImage = buttonDelete.closest('.element');
        CardImage.remove();
    })
});


// like
//


// element.forEach((button) => {
//     button.classList.add('');
// }