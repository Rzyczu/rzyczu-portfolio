export async function sendContactForm() {
    var nameInput = document.getElementById('nameInput');
    var emailInput = document.getElementById('emailInput');
    var messageInput = document.getElementById('messageInput');

    var params = {
        name: (nameInput && nameInput.value) || "",
        email: (emailInput && emailInput.value) || "",
        message: (messageInput && messageInput.value) || ""
    };


    console.log(params);

    var alertMessage = document.getElementById('alertMessage');
    const form = document.getElementById('contactForm');

    // Walidacja pustego imienia, maila, błędnego maila i pustej wiadomości
    if (params.name === '' || params.email === '' || params.message === '') {
        alertMessage.className = 'alert alert-danger mt-3';
        alertMessage.textContent = 'Please fill out all fields.';
        alertMessage.style.display = 'block';

        form.classList.add('was-validated');
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(params.email)) {
        alertMessage.className = 'alert alert-danger mt-3';
        alertMessage.textContent = 'Invalid email address.';
        alertMessage.style.display = 'block';

        form.classList.add('was-validated');
        return;
    }

    try {
        let isSuccess = await sendEmail(params);

        document.getElementById('nameInput').value = "";
        document.getElementById('emailInput').value = "";
        document.getElementById('messageInput').value = "";

        if (isSuccess) {
            alertMessage.className = 'alert alert-success mt-3';
            alertMessage.textContent = 'Message sent successfully.';
            alertMessage.style.display = 'block';
        }
    } catch (error) {
        alertMessage.className = 'alert alert-danger mt-3';
        alertMessage.textContent = 'Something went wrong. Please send an email personally to mily.wot@gmail.com';
        alertMessage.style.display = 'block';
    }

    return sendContactForm;
}

window.sendContactForm = sendContactForm;


function sendEmail(params) {
    const ServiceID = "service_v55szk4";
    const templateID = "template_1w0vymq";
    return new Promise((resolve, reject) => {
        emailjs.send(ServiceID, templateID, params)
            .then((response) => {
                resolve(true);
            })
            .catch((err) => {
                console.error(err);
                reject(err);
            });
    });
}