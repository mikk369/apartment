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
/* HANDLE SUBMITED MESSAGE */
/* ///\\\\ */
document.addEventListener('DOMContentLoaded', function () {  

    // Get a reference to the form and the notification div
    const form = document.querySelector('.cta-form');
    const messageSentNotification = document.getElementById('messageSent');
    
    // Add an event listener for the form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Serialize the form data
        const formData = new FormData(form);
        
        // Perform a POST request using fetch
        fetch('php/send_email.php', {
            method: 'POST',
            body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
            // Handle the response as needed
            if (data.success) {
                // Display the message sent notification
                messageSentNotification.style.display = 'block';
                
                // Clear the form fields
                form.reset();
                // Scroll the page 1 rem up
                window.scrollBy(0, -80);
                // Hide the notification after 3 seconds
                setTimeout(function () {
                    messageSentNotification.style.display = 'none';
                }, 3000); // 3 seconds
            } else {
                // Handle the case where the email couldn't be sent
                console.error('Message could not be sent.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
}); 
