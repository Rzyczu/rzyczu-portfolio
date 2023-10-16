// Get all elements with class "img-zoom"
var zoomImages = document.querySelectorAll('.img-zoom');
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("zoom");
var captionText = document.getElementById("caption");

// Loop through each zoomable image and attach click event listener
zoomImages.forEach(function (img) {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x) or outside the modal, close the modal
span.onclick = function () {
    closeModal();
};

modal.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
};

function closeModal() {
    modal.style.display = "none";
    modalImg.className = "modal-content"; // Reset any additional classes added during zoom
}

// document.querySelectorAll(".navbar-nav a").forEach(function (link) {
//     link.addEventListener("click", function () {
//         if (document.getElementById('offcanvasDarkNavbar').classList.contains('show')) {
//             var offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasDarkNavbar'));
//             console.log(offcanvas)
//             offcanvas.hide();
//         }
//     });
// });

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "sender@email_address.com",
        Password: "Enter your password",
        To: 'mily.wot@gmail.com',
        From: "sender@email_address.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
} 
