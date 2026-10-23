        // Create floating hearts
        function createHearts() {
            const heartsContainer = document.getElementById('heartsContainer');
            const heartCount = 15;
            
            for (let i = 0; i < heartCount; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                
                // Random position and animation delay
                const left = Math.random() * 100;
                const delay = Math.random() * 15;
                const duration = 15 + Math.random() * 10;
                const size = 15 + Math.random() * 20;
                
                heart.style.left = `${left}vw`;
                heart.style.animation = `float ${duration}s linear infinite`;
                heart.style.animationDelay = `${delay}s`;
                heart.style.width = `${size}px`;
                heart.style.height = `${size}px`;
                
                heartsContainer.appendChild(heart);
            }
        }

        // Initialize the page
        window.addEventListener('DOMContentLoaded', () => {
            createHearts();
        });
