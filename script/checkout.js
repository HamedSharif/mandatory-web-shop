let submit  = document.getElementById("submit")

submit.addEventListener('click', function validateForm() {


    let form = document.getElementById("theForm")

    for (let i = 0; i < form.length; i++) {

        let x = form.elements[i].value;
        let email = document.getElementById("email");
        let myEmail = email.value
        myEmail = myEmail.trim();
        let phoneNomber = document.getElementById("phone");
        let myPhoneNumber = phoneNomber.value;
        let zip = document.getElementById("zip");
        let myZip = zip.value;

        if ( x === "" ) {
            alert("fields must be filled out");
            return false
        }else if
        (!myEmail.match(/^.+@.+$/)){
            alert("please enter a valid email");
            return false;
        }else if (!myPhoneNumber.match(/\d/)) {
            alert("Please enter valid phone nomber");
            return false;


        }else if (!myZip.match(/\d/)) {
            alert("Please enter ZIP");
            return false;


        }
        else {
            alert("Thank you for your booking :) ");
            return false
        }

    }

})