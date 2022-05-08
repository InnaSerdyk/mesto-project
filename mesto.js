const content = document.querySelector('.content');
const editButton = content.querySelector('.profile__edit-button');
const profileButton = content.querySelector('.profile__button');
const openPopup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const closePopupMesto = document.querySelector('.popup__close-mesto');
const openPopupMesto = document.querySelector('.popup-mesto');
const editForm = document.querySelector('[name="edit-form"]');
const createForm = document.querySelector('[name="create-form"]');

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

/*Обработчик «отправки» формы редактирования*/
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

const elements = document.querySelector('.elements');

function createCard(addCard) {
    const elementTemplate = document.querySelector('#element-template').content;
    const elementDiv = elementTemplate.querySelector('.element').cloneNode(true);
    let elementImage = elementDiv.querySelector('.element__image');
    elementImage.setAttribute("src", addCard.link);
    elementImage.setAttribute("alt", addCard.name);
    elementDiv.querySelector('.element__paragraph').textContent = addCard.name;

    //like
    let buttonLike = elementDiv.querySelector('.element__heart');
    buttonLike.addEventListener('click', function (evt) {
        evt.target.classList.toggle('.element__heart:active');
    });
    //удаление карточки
    const buttonDelete = elementDiv.querySelector('.element__delete');
    buttonDelete.addEventListener('click', function () {
        const CardImage = buttonDelete.closest('.element');
        CardImage.remove();
    })
    return elementDiv;
}

initialCards.forEach(function (addCard) {
    const elementDiv = createCard(addCard);

    elements.append(elementDiv);
});

const inputTitle = createForm.querySelector('.popup__input_type_title');
const inputLink = createForm.querySelector('.popup__input_type_link');

/*Обработчик «отправки» формы добавления карточки*/
function formSubmitAdd(evt) {
    evt.preventDefault();

    const card = {
        name: inputTitle.value,
        link: inputLink.value
    };

    let cardElement = createCard(card);
    elements.prepend(cardElement);

    openPopupMesto.classList.remove('popup-mesto_opened');
}

createForm.addEventListener('submit', formSubmitAdd);