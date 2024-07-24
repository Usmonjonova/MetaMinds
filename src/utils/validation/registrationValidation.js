// registrationValidation.js

export function validateRegistration(formData) {
    const errors = {};

    // Validate first name
    if (!formData.firstName || formData.firstName.trim() === "") {
        errors.firstName = "First name is required.";
    } else if (formData.firstName.length < 2) {
        errors.firstName = "First name must be at least 2 characters long.";
    }

    // Validate second name
    if (!formData.lastName || formData.lastName.trim() === "") {
        errors.lastName = "Second name is required.";
    } else if (formData.lastName.length < 2) {
        errors.lastName = "Second name must be at least 2 characters long.";
    }

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
