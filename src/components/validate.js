
//*******************валидация форм************************
// кнопка сабмит
const setSubmitButtonState = (isFormValid, popupButton) => {
    if (isFormValid === true) {
        popupButton.removeAttribute('disabled');
        popupButton.classList.remove('popup__button_disable')
    } else {
        popupButton.setAttribute('disabled', true);
        popupButton.classList.add('popup__button_disable');
    }
}

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent=' ';
};

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};


const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement);

            let valid = true;
            for (const inputListElement of inputList) {
                if (!inputListElement.validity.valid) {
                    valid = false;
                    break;
                }
            }
            const button = formElement.closest(".popup").querySelector(".popup__button");
            setSubmitButtonState(valid, button);
        });
    });
};

export const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('.submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
};