const validate = (inputs) => {

    const errors = {};
    //name check
    if (!inputs.name) {
        errors.name = 'Name is Required'
    }

    //TEL
    var telPattern = new RegExp(/^[0-9\b]+$/);
    if (!inputs.tel) {
        errors.tel = 'Contact No. is Required'
    } else if (!telPattern.test(inputs.tel)) {
        errors.tel = 'Invalid Contact No.'
    } else if ((inputs.tel).length !== 10) {
        errors.tel = 'Invalid Contact No.'
    }

    //Email errors
    var emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!inputs.email) {
        errors.email = 'Email is Required';
    } else if (!emailPattern.test(inputs.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
}

export default validate;