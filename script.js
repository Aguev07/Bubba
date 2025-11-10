// Set the anniversary date (make sure the date is in the correct format)
const anniversaryDate = new Date("2025-11-11T00:00:00").getTime(); // Your anniversary date

// Update the countdown every second
const countdown = setInterval(function() {
    const now = new Date().getTime(); // Get the current date and time
    const timeLeft = anniversaryDate - now; // Calculate the time difference

    // Calculate days, hours, minutes, and seconds left
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the countdown element
    document.getElementById("countdown").innerHTML = 
      `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished
    if (timeLeft < 0) {
        clearInterval(countdown); // Stop the countdown
        document.getElementById("countdown").innerHTML = "Happy Anniversary!"; // Show the message
    }
}, 1000); // This updates the countdown every second (1000 ms)

document.addEventListener('DOMContentLoaded', function () {
    // Event images for each timeline event
    const eventImages = {
        1: ['images/meeting2.PNG', 'images/meeting3.PNG', 'images/meeting5.PNG','images/meeting4.PNG','images/meeting6.PNG','images/meeting7.PNG'],  // Images for Event 1
        4: ['images/birthday2.PNG', 'images/birthday3.PNG', 'images/birthday4.PNG', 'images/birthday5.PNG', 'images/birthday6.PNG', 'images/birthday7.PNG','images/birthday10.PNG', 'images/birthday9.PNG','images/birthday8.PNG'],  // Images for Event 3
        5: ['images/kiss2.PNG', 'images/kiss3.PNG', 'new/kiss1.PNG', 'images/kiss4.PNG', 'images/kiss5.PNG', 'new/kiss2.PNG'],   // Images for Event 5
        7: ['images/christmas2.PNG', 'images/christmas3.PNG', 'images/christmas4.PNG', 'images/christmas5.PNG','images/christmas6.PNG', 'images/christmas7.PNG', 'images/christmas8.PNG','images/christmas9.PNG'],  // Images for Event 1
        8: ['images/concert2.PNG', 'images/concert3.PNG', 'images/concert5.PNG','images/concert6.PNG', 'images/concert2.mp4', 'images/concert7.PNG', 'images/concert8.PNG','images/concert1.mp4'],  // Images for Event 3
        9: ['images/valentines2.PNG', 'new/val2.PNG', 'images/valentines3.PNG', 'new/val1.mp4', 'images/valentines5.PNG', 'images/valentines4.PNG'],   // Images for Event 4
        10: ['images/trip2.PNG', 'images/trip3.PNG', 'new/trip2.mp4','images/trip4.PNG', 'images/trip5.PNG','images/trip6.PNG', 'new/trip3.mp4', 'images/trip7.PNG', 'images/trip8.PNG', 'images/trip9.PNG'],   // Images for Event 5
        11: ['new/us6.mp4', 'images/us3.PNG', 'images/us4.PNG', 'new/us1.mp4', 'images/us5.PNG', 'new/us3.mp4', 'new/us2.PNG', 'new/us7.mp4', 'images/us6.PNG', 'new/us5.mp4']   // Images for Event 5
    };

    // Function to open the modal and show images related to the clicked event
    function openModal(eventId) {
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('modal-title');
    const modalGallery = document.getElementById('modal-gallery');

    // Set the title of the modal based on the event
    switch(eventId) {
        case 1:
            modalTitle.textContent = 'Our First Meeting';
            break;
        case 2:
            modalTitle.textContent = 'First Date';
            break;
        case 3:
            modalTitle.textContent = 'Our First Kiss';
            break;
        case 4:
            modalTitle.textContent = 'Our First Trip';
            break;
        default:
            modalTitle.textContent = 'Memory Lane';
    }

    // Clear previous images in the modal
    modalGallery.innerHTML = '';

    // Insert images and videos related to the clicked event into the modal gallery
    eventImages[eventId].forEach(item => {
        const extension = item.split('.').pop().toLowerCase();
        
        if (extension === 'mp4' || extension === 'webm' || extension === 'ogg') {
            // If it's a video, create a video element
            const videoElement = document.createElement('video');
            videoElement.src = item;
            videoElement.controls = true;
            videoElement.classList.add('gallery-media');
            modalGallery.appendChild(videoElement);
        } else {
            // Otherwise, treat it as an image
            const img = document.createElement('img');
            img.src = item;
            img.alt = `Image from event ${eventId}`;
            img.classList.add('gallery-media');
            modalGallery.appendChild(img);
        }
    });

    // Show the modal with fade-in effect
    modal.classList.add('show');
}


    // Function to close the modal
    function closeModal() {
        const modal = document.getElementById('imageModal');
        modal.classList.remove('show');
    }

    // Add click event listeners to all timeline events
    const timelineEvents = document.querySelectorAll('.timeline-event');
    timelineEvents.forEach(event => {
        const eventId = event.id.split('-')[1];  // Get event ID (e.g., "1" from "event-1")
        event.addEventListener('click', () => openModal(eventId));
    });

    // Close the modal when the close button is clicked
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);

    // Close the modal if the user clicks anywhere outside the modal content
    const modal = document.getElementById('imageModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
});

// Add event listener to the music icon for redirecting to a music page or link
document.getElementById('music-icon').addEventListener('click', function() {
    window.open("https://open.spotify.com/playlist/5MtfuFNA0N1vm2UWBUlEJO?si=e956c165049f48f1");  // Replace this with your actual link
});

