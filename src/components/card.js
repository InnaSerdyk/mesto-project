/*Добавление карточек*/
import {deletePopup, openPopup, elementTemplate, elements} from '../mesto.js'
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
function elementHeartHandler(evt) {
    evt.target.classList.toggle('element__heart_active');
}
function createCard(card) {

    const cardDiv = elementTemplate.querySelector('.element').cloneNode(true);
    const elementImage = cardDiv.querySelector('.element__image');
    elementImage.setAttribute("src", card.link);

    elementImage.setAttribute("alt", card.name);
    cardDiv.querySelector('.element__paragraph').textContent = card.name;

    //like
    const elementHeart = cardDiv.querySelector('.element__heart');
    elementHeart.addEventListener('click', elementHeartHandler);

    //удаление карточки
    const buttonDelete = cardDiv.querySelector('.element__delete');

    buttonDelete.addEventListener('click', function (evt) {
        const consentButton = document.querySelector('.popup__button_consent');
        consentButton.addEventListener('click', function (evt) {
            cardDiv.remove();
        });
        openPopup(deletePopup)
    });


    // popup с картинкой
    elementImage.addEventListener('click', function () {
        imageContainer.setAttribute('src', card.link);
        imageContainer.setAttribute('alt', card.name);
        imageName.textContent = card.name;
        openPopup(openingImagePopup);
    });
    return cardDiv;
}

initialCards.forEach(function (addCard) {
    const elementDiv = createCard(addCard);
    elements.append(elementDiv);
});

const inputTitle = creationForm.querySelector('.popup__input_type_title');
const inputLink = creationForm.querySelector('.popup__input_type_link');

/*Обработчик «отправки» формы добавления карточки*/
function formSubmitAddHandler(evt) {
    evt.preventDefault();
    const card = {
        name: inputTitle.value,
        link: inputLink.value
    };

    const cardElement = createCard(card);
    elements.prepend(cardElement);
    inputTitle.value = '';
    inputLink.value = '';
    closePopup(mestoPopup);
};

creationForm.addEventListener('submit', formSubmitAddHandler);
profileAvatar.addEventListener('click', evt => {
    openPopup(updatePopup);
})
