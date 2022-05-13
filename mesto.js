const content = document.querySelector('.content');
const profileButtonEdit = content.querySelector('.profile__button_edit');
const profileButtonAdd = content.querySelector('.profile__button_add');
const popupEdit = document.querySelector('.popup_edit');
const popupMesto = document.querySelector('.popup_mesto');
const closingPopups = document.querySelectorAll('.popup__close');
const openingPopupImage = document.querySelector('.popup_image');
const editingForm = document.querySelector('[name="popup-edit"]');
const creationForm = document.querySelector('[name="popup-create"]');
const profileName = document.querySelector('.profile__name');
const elements = document.querySelector('.elements');
const profilePosition = document.querySelector('.profile__position');
const inputName = editingForm.querySelector('.popup__input_type_name');
const inputPosition = editingForm.querySelector('.popup__input_type_position');
const elementTemplate = document.querySelector('#element-template').content;
const imageContainer = document.querySelector('.popup__image-open');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

/*открытие попап*/
profileButtonEdit.addEventListener('click', function (evt) {
    openPopup(popupEdit);
});

profileButtonAdd.addEventListener('click', function (evt) {
    openPopup(popupMesto);
});
//закрытие попапа
closingPopups.forEach(closingPopup => closingPopup.addEventListener('click', function popupClose(evt) {
    closePopup(closingPopup.closest('.popup'));
}));


/*Обработчик «отправки» формы редактирования*/
function formSubmitHandler(evt) {
    evt.preventDefault();
    const textInputName = inputName.value;
    const textInputPosition = inputPosition.value;
    profileName.textContent = textInputName;
    profilePosition.textContent = textInputPosition;
    closePopup(popupEdit);
}
editingForm.addEventListener('submit', formSubmitHandler);

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
function createCard(card) {
    const elementDiv = elementTemplate.querySelector('.element').cloneNode(true);
    const elementImage = elementDiv.querySelector('.element__image');
    elementImage.setAttribute("src", card.link);
    elementImage.setAttribute("alt", card.name);
    elementDiv.querySelector('.element__paragraph').textContent = card.name;

    //like
    const elementHeart = elementDiv.querySelector('.element__heart');
    elementHeart.addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__heart_active');
    });

    //удаление карточки
    const buttonDelete = elementDiv.querySelector('.element__delete');
    buttonDelete.addEventListener('click', function () {
        const cardImage = buttonDelete.closest('.element');
        cardImage.remove();
    });

    // popup с картинкой
    elementImage.addEventListener('click', function () {
        imageContainer.setAttribute('src', card.link);
        imageContainer.setAttribute('alt', card.name);
        const imageName = openingPopupImage.querySelector(".popup__image-name");
        imageName.textContent = card.name;

        elementDiv.querySelector('.element__paragraph').textContent = card.name;
        openPopup(openingPopupImage);
    });
    return elementDiv;

}


initialCards.forEach(function (addCard) {
    const elementDiv = createCard(addCard);
    elements.append(elementDiv);
});

const inputTitle = creationForm.querySelector('.popup__input_type_title');
const inputLink = creationForm.querySelector('.popup__input_type_link');

/*Обработчик «отправки» формы добавления карточки*/
function formSubmitAdd(evt) {
    evt.preventDefault();
    const card = {
        name: inputTitle.value,
        link: inputLink.value
    };

    const cardElement = createCard(card);
    elements.prepend(cardElement);
    inputTitle.value = '';
    inputLink.value = '';
    closePopup(evt.target.closest('.popup'));
}

creationForm.addEventListener('submit', formSubmitAdd);