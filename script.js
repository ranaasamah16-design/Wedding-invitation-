// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date('December 25, 2026').getTime();
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('days').innerText = '00';
            document.getElementById('hours').innerText = '00';
            document.getElementById('minutes').innerText = '00';
            document.getElementById('seconds').innerText = '00';
        }
    }, 1000);
}

// RSVP Form Handler
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const members = this.querySelector('input[type="number"]').value;
    
    if (name && members) {
        // Get existing guests from localStorage
        let guests = JSON.parse(localStorage.getItem('wedding_guests')) || [];
        
        // Add new guest
        guests.push({
            name: name,
            members: parseInt(members),
            date: new Date().toLocaleString()
        });
        
        // Save to localStorage
        localStorage.setItem('wedding_guests', JSON.stringify(guests));
        
        // Update guest count
        updateGuestCount();
        
        // Clear form
        this.reset();
        
        // Show success message
        alert(`Thank you ${name}! Your attendance for ${members} guest(s) has been confirmed. ❤️`);
    }
});

// Update Guest Count
function updateGuestCount() {
    const guests = JSON.parse(localStorage.getItem('wedding_guests')) || [];
    let totalGuests = 0;
    guests.forEach(guest => {
        totalGuests += parseInt(guest.members);
    });
    document.getElementById('guestCount').innerText = totalGuests;
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section, header').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

// Initialize on page load
window.addEventListener('load', function() {
    updateCountdown();
    updateGuestCount();
});

// Update countdown and guest count on page visibility change
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        updateGuestCount();
    }
});

// Google Maps link update (replace with your venue coordinates)
document.querySelector('.map-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // Replace coordinates with your venue location
    const latitude = '28.6139';  // Delhi coordinates as example
    const longitude = '77.2090';
    window.open(`https://maps.google.com/?q=${latitude},${longitude}`, '_blank');
});
