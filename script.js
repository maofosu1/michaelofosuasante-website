document.addEventListener("DOMContentLoaded", function () {
    // Add event listener for form submission
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // You can add your form submission logic here
        // For example, you can send form data to a server using Fetch API
        // and handle the response accordingly

        // For now, let's log the form data to the console
        console.log("Form submitted!");
        console.log("First Name:", form.firstName.value);
        console.log("Last Name:", form.lastName.value);
        console.log("Email:", form.email.value);
        console.log("Phone:", form.phone.value);
        console.log("Message:", form.message.value);
    });
});
