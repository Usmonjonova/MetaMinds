// loginValidation.js

export function validateLogin(formData) {
    const errors = {};

    // Validate email
    if (!formData.email || formData.email.trim() === "") {
        errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Email is invalid.";
    }

    // Validate password
    if (!formData.password || formData.password.trim() === "") {
        errors.password = "Password is required.";
    } else if (formData.password.length < 6) {
        errors.password = "Password must be at least 6 characters long.";
    }

    return errors;
}
