const form = document.querySelector('form');

form.onsubmit = () => {
    let fullName = document.querySelector('input[type = text]');
    let phoneNumber = document.querySelector('input[type = number]');
    let birthDate = document.querySelector('input[type = date]');
    let gender = document.querySelector('input[type = radio]:checked');
    let languages = document.querySelectorAll('input[type = checkbox]:checked');
    let branches = document.querySelector('select');

    let langs = [];
    languages.forEach((checkbox) => {
        langs.push(checkbox.value);
    })

    let dataObject = {
        nameData: fullName.value,
        contactData: phoneNumber.value,
        birthData: birthDate.value,
        genderData: gender.value,
        langData: langs,
        branchData: branches.value
    }
    localStorage.setItem('userData', JSON.stringify(dataObject));
}