function validate(values){
    let errors = {};
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Email is invalid";
    }
    if (!values.password) {
        errors.password = "Password is required";
    } else if (!passwordPattern.test(values.password)) {
        errors.password = "Password is invalid";
    }
    // if (!values.confirmPassword) {
    //     errors.confirmPassword = "Confirm Password is required";
    // } else if (values.password !== values.confirmPassword) {
    //     errors.confirmPassword = "Confirm Password is invalid";
    // }

    return errors;
}
export default validate;