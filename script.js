// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = 'pink';
        this.init();
    }

    init() {
        this.loadSavedTheme();
        this.bindThemeButtons();
        this.applyTheme(this.currentTheme);
    }

    loadSavedTheme() {
        const saved = localStorage.getItem('website-theme');
        if (saved) {
            this.currentTheme = saved;
        }
    }

    applyTheme(themeName) {
        document.body.setAttribute('data-theme', themeName);
        document.body.classList.add('theme-transition');
        this.currentTheme = themeName;
        localStorage.setItem('website-theme', themeName);
        
        // Remove transition class after animation
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 500);
    }

    bindThemeButtons() {
        const themeButtons = document.querySelectorAll('.theme-btn');
        themeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const theme = button.getAttribute('data-theme');
                this.applyTheme(theme);
                
                // Add click animation
                button.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    button.style.transform = '';
                }, 150);
            });
        });
    }
}

// Clock Management
class ClockManager {
    constructor() {
        this.clockElement = document.getElementById('clock');
        this.init();
    }

    init() {
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
    }

    updateClock() {
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', { 
            hour12: true,
            hour: '2-digit',
            minute: '2-digit'
        });
        
        if (this.clockElement) {
            this.clockElement.textContent = time;
        }
    }
}

// Visit Counter
class VisitCounter {
    constructor() {
        this.init();
    }

    init() {
        let visits = localStorage.getItem('visit-count') || 0;
        visits = parseInt(visits) + 1;
        localStorage.setItem('visit-count', visits);
        
        const counter = document.getElementById('visitCount');
        if (counter) {
            counter.textContent = visits.toString().padStart(3, '0');
        }
    }
}

// Music Player (Basic)
class MusicPlayer {
    constructor() {
        this.isPlaying = false;
        this.init();
    }

    init() {
        const playBtn = document.querySelector('.play-btn');
        if (playBtn) {
            playBtn.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent any default button behavior
                this.togglePlay();
            });
        }
    }

    togglePlay() {
        this.isPlaying = !this.isPlaying;
        const playBtn = document.querySelector('.play-btn');
        
        if (playBtn) {
            playBtn.textContent = this.isPlaying ? '⏸' : '▶';
            playBtn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                playBtn.style.transform = '';
            }, 150);
        }
    }
}

// Card Animation Manager
class CardAnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.observeCards();
    }

    observeCards() {
        const cards = document.querySelectorAll('.card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        cards.forEach((card, index) => {
            // Initial state
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            
            observer.observe(card);
        });
    }
}

// Utility Functions
const utils = {
    // Add sparkle effect to theme buttons
    addSparkle: function(element) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkle 1s ease-out forwards';
        
        const rect = element.getBoundingClientRect();
        sparkle.style.left = rect.left + rect.width/2 + 'px';
        sparkle.style.top = rect.top + rect.height/2 + 'px';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    },

    // Random greeting messages
    getRandomGreeting: function() {
        const greetings = [
            "Welcome to my digital space! ✨",
            "Thanks for visiting! 🌟",
            "Hope you enjoy your stay! 💫",
            "Nice to see you here! 🎈",
            "Welcome, friend! 🌸"
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }
};

// Add CSS for sparkle animation
const sparkleCSS = `
@keyframes sparkle {
    0% {
        opacity: 1;
        transform: scale(0) rotate(0deg);
    }
    50% {
        opacity: 1;
        transform: scale(1) rotate(180deg);
    }
    100% {
        opacity: 0;
        transform: scale(0) rotate(360deg);
    }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = sparkleCSS;
document.head.appendChild(styleSheet);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize splash screen first
    new SplashScreenManager();
    
    // Initialize all other managers
    const themeManager = new ThemeManager();
    const clockManager = new ClockManager();
    const visitCounter = new VisitCounter();
    const musicPlayer = new MusicPlayer();
    const cardAnimationManager = new CardAnimationManager();

    // Add sparkle effects to theme buttons
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            utils.addSparkle(button);
        });
    });

    // Add some interactive touches
    const startButton = document.querySelector('.start-button');
    if (startButton) {
        startButton.addEventListener('click', () => {
            alert('Welcome to your new website template! 🎉\n\nStart customizing by:\n• Adding your own content\n• Replacing placeholder images\n• Modifying the themes\n• Adding new cards');
        });
    }

    console.log('🌟 Website template initialized! Ready for customization.');
});

//Splash screen Manager
// Splash Screen Manager
class SplashScreenManager {
    constructor() {
        this.splashScreen = document.getElementById('splashScreen');
        this.mainContent = document.getElementById('mainContent');
        this.progressFill = document.getElementById('progressFill');
        this.enterSound = document.getElementById('enter-sound');
        
        this.init();
    }
    
    init() {
        // Start the loading sequence automatically
        this.startLoading();
    }
    
    startLoading() {
        // Loading sequence takes 3 seconds
        setTimeout(() => {
            this.hideSplash();
        }, 3000);
    }
    
    hideSplash() {
        if (this.splashScreen) {
            this.splashScreen.classList.add('fade-out');
            
            // Play enter sound right when fade starts
            this.playWelcomeSound();
            
            setTimeout(() => {
                this.splashScreen.style.display = 'none';
                if (this.mainContent) {
                    this.mainContent.classList.remove('hidden');
                }
            }, 500);
        }
    }
    
    playWelcomeSound() {
        if (this.enterSound) {
            // Reset audio to beginning in case it was played before
            this.enterSound.currentTime = 0;
            
            // Set volume (optional - adjust as needed)
            this.enterSound.volume = 0.7;
            
            // Try to play the sound
            const playPromise = this.enterSound.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log('Welcome sound played successfully! 🎵');
                    })
                    .catch(error => {
                        console.log('Audio autoplay prevented by browser policy:', error);
                        console.log('User interaction required for audio playback');
                        
                        // If autoplay fails, try to play on first user click/touch
                        this.setupFallbackAudio();
                    });
            }
        } else {
            console.log('Welcome sound not found. Check if audio element exists and file path is correct.');
        }
    }
    
    setupFallbackAudio() {
        // If autoplay was blocked, play sound on first user interaction
        const playOnInteraction = () => {
            if (this.enterSound) {
                this.enterSound.currentTime = 0;
                this.enterSound.play().then(() => {
                    console.log('Welcome sound played after user interaction! 🎵');
                }).catch(e => console.log('Audio playback failed:', e));
            }
            
            // Remove listeners after first successful play
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
            document.removeEventListener('keydown', playOnInteraction);
        };
        
        // Listen for any user interaction
        document.addEventListener('click', playOnInteraction, { once: true });
        document.addEventListener('touchstart', playOnInteraction, { once: true });
        document.addEventListener('keydown', playOnInteraction, { once: true });
    }
}
