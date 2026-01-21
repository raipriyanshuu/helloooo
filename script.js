// ===== Love Counter Animation =====
function animateLoveCounter() {
    const counter = document.getElementById('loveCounter');
    let count = 0;
    const target = 1000000; // One million heartbeats
    const duration = 3000; // 3 seconds
    const increment = target / (duration / 16); // 60fps

    const updateCounter = () => {
        count += increment;
        if (count < target) {
            counter.textContent = Math.floor(count).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = '∞';
            // Add sparkle effect
            counter.style.animation = 'glow 2s ease-in-out infinite';
        }
    };

    // Start animation when counter is in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(counter);
}

// ===== Floating Hearts Animation =====
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.style.position = 'fixed';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-50px';
    heart.style.opacity = '0.6';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1';
    heart.style.transition = 'all 4s linear';

    document.body.appendChild(heart);

    // Animate upward
    setTimeout(() => {
        heart.style.bottom = '110vh';
        heart.style.opacity = '0';
        heart.style.transform = `translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`;
    }, 100);

    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 4100);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 2000);

// ===== Sparkle Effect on Hover =====
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.transition = 'all 1s ease-out';
    sparkle.style.opacity = '1';

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.style.transform = `translateY(-50px) scale(0)`;
        sparkle.style.opacity = '0';
    }, 50);

    setTimeout(() => {
        sparkle.remove();
    }, 1050);
}

// Add sparkle effect to glass cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.glass-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const x = rect.left + Math.random() * rect.width;
            const y = rect.top + Math.random() * rect.height;
            createSparkle(x, y);
        });
    });
});

// ===== Music Toggle (Optional) =====
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
        musicToggle.textContent = '🎵';
        musicToggle.style.animation = 'pulse 1s ease-in-out infinite';
        // You can add actual music here if you have an audio file
        // const audio = new Audio('path-to-your-music.mp3');
        // audio.play();
    } else {
        musicToggle.textContent = '🎵';
        musicToggle.style.animation = 'none';
    }
});

// ===== Smooth Scroll Animation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ===== Parallax Effect for Hero Section =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');

    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroSection.style.opacity = 1 - scrolled / 500;
    }
});

// ===== Reveal Animation on Scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply reveal animation to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.worth-section, .reasons-section, .comfort-section, .final-message');

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        revealObserver.observe(section);
    });

    // Initialize love counter animation
    animateLoveCounter();
});

// ===== Random Love Quotes (Optional Enhancement) =====
const loveQuotes = [
    "Distance means so little when someone means so much.",
    "You are my today and all of my tomorrows.",
    "In you, I've found the love of my life and my closest friend.",
    "Every love story is beautiful, but ours is my favorite.",
    "You are the source of my joy, the center of my world.",
];

// ===== Cursor Trail Effect =====
let cursorTrail = [];
const maxTrailLength = 10;

document.addEventListener('mousemove', (e) => {
    // Only on desktop
    if (window.innerWidth > 768) {
        const trail = document.createElement('div');
        trail.style.position = 'fixed';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.width = '8px';
        trail.style.height = '8px';
        trail.style.borderRadius = '50%';
        trail.style.background = 'rgba(255, 107, 157, 0.5)';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '9998';
        trail.style.transition = 'all 0.5s ease-out';

        document.body.appendChild(trail);
        cursorTrail.push(trail);

        setTimeout(() => {
            trail.style.opacity = '0';
            trail.style.transform = 'scale(0)';
        }, 50);

        setTimeout(() => {
            trail.remove();
            cursorTrail.shift();
        }, 550);

        // Limit trail length
        if (cursorTrail.length > maxTrailLength) {
            const oldTrail = cursorTrail.shift();
            if (oldTrail && oldTrail.parentNode) {
                oldTrail.remove();
            }
        }
    }
});

// ===== Add Interactive Glow to Worth Cards =====
document.addEventListener('DOMContentLoaded', () => {
    const worthCards = document.querySelectorAll('.worth-card');

    worthCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', x + 'px');
            card.style.setProperty('--mouse-y', y + 'px');
        });
    });
});

// ===== Photo Upload Functionality =====
let uploadedPhotos = [];

// Load photos from localStorage on page load
function loadPhotosFromStorage() {
    const savedPhotos = localStorage.getItem('loveWebsitePhotos');
    if (savedPhotos) {
        uploadedPhotos = JSON.parse(savedPhotos);
        uploadedPhotos.forEach(photoData => {
            displayPhoto(photoData);
        });
    }
}

// Save photos to localStorage
function savePhotosToStorage() {
    localStorage.setItem('loveWebsitePhotos', JSON.stringify(uploadedPhotos));
}

// Display a photo in the grid
function displayPhoto(photoData) {
    const photoGrid = document.getElementById('photoGrid');

    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';
    photoItem.dataset.photoId = photoData.id;

    const img = document.createElement('img');
    img.src = photoData.data;
    img.alt = 'Precious memory';

    const overlay = document.createElement('div');
    overlay.className = 'photo-overlay';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-button';
    deleteBtn.innerHTML = '×';
    deleteBtn.setAttribute('aria-label', 'Delete photo');
    deleteBtn.onclick = (e) => {
        e.stopPropagation();
        deletePhoto(photoData.id);
    };

    overlay.appendChild(deleteBtn);
    photoItem.appendChild(img);
    photoItem.appendChild(overlay);
    photoGrid.appendChild(photoItem);

    // Add click to view full size
    photoItem.addEventListener('click', () => {
        viewPhotoFullSize(photoData.data);
    });
}

// Delete a photo
function deletePhoto(photoId) {
    // Remove from array
    uploadedPhotos = uploadedPhotos.filter(photo => photo.id !== photoId);

    // Remove from DOM
    const photoItem = document.querySelector(`[data-photo-id="${photoId}"]`);
    if (photoItem) {
        photoItem.style.animation = 'fadeOutScale 0.3s ease-out';
        setTimeout(() => {
            photoItem.remove();
        }, 300);
    }

    // Update localStorage
    savePhotosToStorage();
}

// View photo in full size
function viewPhotoFullSize(photoSrc) {
    const modal = document.createElement('div');
    modal.className = 'photo-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
        animation: fadeIn 0.3s ease-out;
    `;

    const img = document.createElement('img');
    img.src = photoSrc;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 16px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        animation: scaleIn 0.3s ease-out;
    `;

    modal.appendChild(img);
    document.body.appendChild(modal);

    modal.addEventListener('click', () => {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            modal.remove();
        }, 300);
    });
}

// Handle file selection
function handleFiles(files) {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    Array.from(files).forEach(file => {
        // Validate file type
        if (!validTypes.includes(file.type)) {
            alert(`${file.name} is not a valid image format. Please use JPG, PNG, GIF, or WebP.`);
            return;
        }

        // Validate file size
        if (file.size > maxSize) {
            alert(`${file.name} is too large. Please use images under 5MB.`);
            return;
        }

        // Read and display the file
        const reader = new FileReader();
        reader.onload = (e) => {
            const photoData = {
                id: Date.now() + Math.random(),
                data: e.target.result,
                name: file.name
            };

            uploadedPhotos.push(photoData);
            displayPhoto(photoData);
            savePhotosToStorage();

            // Create sparkle effect
            createSparkle(window.innerWidth / 2, window.innerHeight / 2);
        };
        reader.readAsDataURL(file);
    });
}

// Initialize upload functionality
document.addEventListener('DOMContentLoaded', () => {
    const uploadArea = document.getElementById('uploadArea');
    const uploadButton = document.getElementById('uploadButton');
    const photoInput = document.getElementById('photoInput');

    // Load saved photos
    loadPhotosFromStorage();

    // Click to upload
    uploadButton.addEventListener('click', (e) => {
        e.stopPropagation();
        photoInput.click();
    });

    uploadArea.addEventListener('click', () => {
        photoInput.click();
    });

    photoInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFiles(e.target.files);
            e.target.value = ''; // Reset input
        }
    });

    // Drag and drop functionality
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('drag-over');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('drag-over');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFiles(files);
        }
    });
});

// Add CSS animations for modal
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    @keyframes scaleIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    @keyframes fadeOutScale {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0.8); }
    }
`;
document.head.appendChild(style);

// ===== Console Message =====
console.log('%c❤️ Made with Love ❤️', 'color: #ff6b9d; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(255, 107, 157, 0.5);');
console.log('%cYou are loved, valued, and precious beyond measure.', 'color: #ffc2d4; font-size: 16px;');
