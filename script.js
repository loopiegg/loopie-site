// Random subtitle functionality
function initRandomSubtitle() {
    const subtitles = [
        "Your Face in Games!",
        "Selfie? Loopie!"
    ];
    
    const subtitleElement = document.getElementById('randomSubtitle');
    if (subtitleElement) {
        // Set initial random subtitle
        const randomIndex = Math.floor(Math.random() * subtitles.length);
        subtitleElement.textContent = subtitles[randomIndex];
        
        // Change subtitle every 3 seconds with fade effect
        setInterval(() => {
            // Fade out
            subtitleElement.style.opacity = '0';
            
            setTimeout(() => {
                // Change text and fade in
                const randomIndex = Math.floor(Math.random() * subtitles.length);
                subtitleElement.textContent = subtitles[randomIndex];
                subtitleElement.style.opacity = '1';
            }, 250); // Half of transition duration
        }, 3000);
    }
}

// Simple smooth scrolling for future navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize random subtitle
    initRandomSubtitle();
    // Add any interactive functionality here
    
    // Simple click analytics simulation
    const downloadButtons = document.querySelectorAll('.btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // In a real implementation, you'd track this with analytics
            console.log('Download button clicked:', this.textContent);
        });
    });
    
    // Add subtle hover effects
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 30px rgba(108, 47, 239, 0.1)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
});