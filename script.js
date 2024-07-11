/* ///\\\ */
/* MODAL */
/* ///\\\\ */
let modal = document.getElementById("myModal");

// Get the images and bind the click event
let imgs = document.getElementsByClassName("gallery-img");
let modalImg = document.getElementById("img01");
for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* ///\\\ */
/* BOOKING FORM */
/* ///\\\\ */
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    
    if (name && email && date) {
        alert(`Aitäh, ${name}! Teie broneering kuupäevaks ${date} on vastu võetud.`);
    } else {
        alert('Palun täitke kõik väljad.');
    }
});