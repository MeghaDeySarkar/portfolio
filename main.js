var typed = new Typed(".text",{
strings:["Data Science enthusiast"],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
})

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var mailtoLink = "mailto:meghadeysarkar7940@gmail.com" +
                     "?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

    window.location.href = mailtoLink;
}