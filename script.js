document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("feedbackForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload
        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        if (name && message) {
            alert(`Thank you, ${name}, for your feedback!\n\nYour message: "${message}"`);
            form.reset(); // Clear the form
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
});
