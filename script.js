// script.js
document.addEventListener('DOMContentLoaded', function() {
    const touchArea = document.getElementById('touch-area');
    const audio = document.getElementById('audio');

    touchArea.addEventListener('touchstart', function(event) {
        // Prevent default touch behavior
        event.preventDefault();

        // Play the audio
        audio.play().catch(error => {
            console.log('Audio playback failed:', error);
        });
    });

    // For desktop testing, you can also add click event listener
    touchArea.addEventListener('click', function(event) {
        // Prevent default click behavior
        event.preventDefault();

        // Play the audio
        audio.play().catch(error => {
            console.log('Audio playback failed:', error);
        });
    });
});

