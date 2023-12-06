//Constants
const ERROR_EMAIL = 1;
const ERROR_CONTACT = 2;
const SUCCESS = 3;

let contactDatabase = [];

//Listeners
addContactBtn.addEventListener("click", addContactToDatabase);
findBtn.addEventListener("click", searchDatabase);

function validateInputs(contact){
    for(key in contact)
    {
        if (!contact[key])
        {
            return key;
        }
    }
    return false;
}

function checkIfContactInfoExists(email, phone){
    for (const contact of contactDatabase)
    {
        if (contact.email === email)
        {
            return ERROR_EMAIL;
        }
        else if(contact.phone === phone)
        {
            return ERROR_CONTACT
        }
    }
    return SUCCESS;
}

function addContactToDatabase(){
    let newContact = {
        name: nameInput.value,
        surname: surnameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
    };

    let error = validateInputs(newContact);
    if (error)
    {
        alert(`The field ${error} has an invalid value!`);
        return;
    }

    error = checkIfContactInfoExists(newContact.email, newContact.phone);
    switch(error){
        case ERROR_EMAIL :
            alert("User with this email exists!");
            break;
        case ERROR_CONTACT :
            alert("User with this phone number exists!");
            break;
        default : 
            alert("New user added!");
            contactDatabase.push(newContact);
            break;
    }

    console.log(contactDatabase);
}

function findContact(searchTerm){
    for (contact of contactDatabase)
    {
        for(key in contact)
        {
            if (contact[key] === searchTerm)
            {
                console.log(contact);
                return true;
            }
        }
    }
    return false;
}

function searchDatabase(){
    let input = searchInput.value;

    if (findContact(input))
    {
        alert("Kontakt je pronađen");
    }
    else{
        alert("Kontakt nije pronađen");
    }
}