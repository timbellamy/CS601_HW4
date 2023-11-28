const d = document;
const facilitatorList = ['Jen', 'Behdad', 'Chris', 'Christian', 'Josh'];
const alphaRegex = new RegExp('^[A-Za-z]+$');
const errorMessages = {
    invalidLength: 'Must be more then two characters.',
    alphaOnly: 'Only alpha characters are allowed.',
    nonFacilitator: `Only valid options are ${facilitatorList.join(', ')}`,
    noneSelected : 'Please select one.'
};


window.onload = function () {
    let hwForm = d.getElementById('form');
    addTextFieldListener(hwForm.firstName);
    addTextFieldListener(hwForm.lastName);
    addTextFieldListener(hwForm.facilitator);

    //Adds listener to clear out the error field when an option is selected.
    hwForm.radioGroup.forEach((btn) =>{
        btn.addEventListener('click', function (){
            d.getElementById('radioError').innerHTML = "";
        })
    });

    //Adds listener to clear out the error field when an option is selected.
    hwForm.checkBox.forEach((box) =>{
        box.addEventListener('click', function (){
            d.getElementById('checkBoxError').innerHTML = "";
        })
    });

    // Adds listener on the form that will stop it from being submitted until after it passes a validation check for the
    // radio buttons and check box. Other fields are validated on the fly and will prevent submission.
    hwForm.addEventListener('submit', function (event){
        let valid = validateForm();
        if(!valid) event.preventDefault();
    });

}

// Adds a event listener to each text field that will set a custom validity if invalid data is entered.
const addTextFieldListener = (el) =>{
    el.addEventListener("focusout", (el) => {
        let element = el.target;
        if (element.value.length < 2) {
            displayError(element, errorMessages.invalidLength);
            element.setCustomValidity(errorMessages.invalidLength);

            return false;
        }
        if (!alphaRegex.test(element.value)) {
            displayError(element, errorMessages.alphaOnly);
            element.setCustomValidity(errorMessages.alphaOnly);
            return false;
        }
        if (element.id === 'facilitator') {
            if (!facilitatorList.some(fac => fac.toLowerCase() === element.value.toLowerCase())) {
                displayError(element, errorMessages.nonFacilitator);
                element.setCustomValidity(errorMessages.nonFacilitator);
                return false;
            }
        }

        // Clear the validity if all checks pass.
        d.getElementById(`${element.id}Error`).innerHTML = "";
        element.setCustomValidity('');
    });
}

const validateForm = () => {
    let radioCheck = d.querySelectorAll('input[name="radioGroup"]:checked');
    if (radioCheck.length === 0) {
        displayError(d.getElementById('radio'), errorMessages.noneSelected);
        return false;
    }

    let checkBoxCheck = d.querySelectorAll('input[name="checkBox"]:checked');
    if (checkBoxCheck.length === 0){
        displayError(d.getElementById('checkBox'), errorMessages.noneSelected);
        return false;
    }

    return true;
}

const displayError = (element, message) => {
    d.getElementById(`${element.id}Error`).innerHTML = message;
}

