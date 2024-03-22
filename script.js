function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function sendEmail(){
    Email.send({
        SecureToken: "bcf1ae0b-2e4d-4251-ae5e-10cb803b4cf8",
        To : 'saketsuman1013@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Someone has Contected you",
        Body : "Namse: "+ document.getElementById("name").value
        +"<br> Email: "+document.getElementById("email").value
        +"<br> Message: "+document.getElementById("massage")
    }).then(
      message => alert("Message sent succesfully")
    );
}