<template>
    <section class="hero-section">
        <!-- Your hero content here -->
        <div class="container h-100 hero">
            <div class="typewriter">
                <h1 id="dynamic-text" class="display-1">CRAFTING EXPERIENCES<br>THAT <span id="text"></span><span class="cursor blinking-cursor" id="cursor"></span></h1>
            </div>
        </div>
        <div id="blue-dot"></div>
    </section>
    <section>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="hollow display-1 display-lg-1"> DIGITAL PARTNER</h1>
                    <h1 class="text-center">
                        Brands. Strategy. Events. Development
                    </h1>
                    </div>
            <div class="row">
                <div class="col-6 red">
                    <!-- Your red column content goes here -->
                </div>
                <div class="col-6 offset-6 expand blue">
                </div>
            </div>
        </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="row">
               
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            followCursor: false
        };
    },
    mounted() {
        this.initTypewriter();
        window.addEventListener('scroll', this.checkScroll);
        document.addEventListener('mousemove', this.handleMouseMove);
    },
    methods: {
        initTypewriter() {
            const words = ["CONNECT.", "INSPIRE.", "EDUCATE.", "ENTERTAIN.", "AMAZE."];
            const textElement = document.getElementById("text");
            const cursorElement = document.getElementById("cursor");
            let wordIndex = 0;
            let letterIndex = 0;
            let isDeleting = false;
            let nextWordDelay = 3000; // Time before starting to delete the word
            let deleteSpeed = 100;
            let lastFrameTime = Date.now();
            let startDelay = 2000; // Initial delay before starting

            function type() {
                let now = Date.now();
                let elapsed = now - lastFrameTime;

                let typingDelay = isDeleting ? deleteSpeed : 200;
                if (elapsed > typingDelay) {
                    if (isDeleting) {
                        letterIndex--;
                        textElement.textContent = words[wordIndex].substring(0, letterIndex);
                    } else {
                        letterIndex++;
                        textElement.textContent = words[wordIndex].substring(0, letterIndex);
                    }
                    if (!isDeleting && letterIndex === words[wordIndex].length) {
                        isDeleting = true;
                        cursorElement.classList.add('blinking-cursor');
                        setTimeout(() => { requestAnimationFrame(type); }, nextWordDelay);
                        return;
                    } else if (isDeleting && letterIndex === 0) {
                        isDeleting = false;
                        wordIndex = (wordIndex + 1) % words.length;
                        cursorElement.classList.remove('blinking-cursor');
                    }

                    lastFrameTime = now;
                }

                requestAnimationFrame(type);
            }

            setTimeout(() => { type(); }, startDelay); // Start the typing effect after an initial delay
        },

        checkScroll() {
            const currentlyFollowing = this.followCursor;
            this.followCursor = window.scrollY > 50;

            const dot = document.getElementById('blue-dot');
            if (this.followCursor) {
                // dot.style.animation = 'none'; // Stop bouncing when following
            } else if (!this.followCursor && currentlyFollowing) {
                this.resetDotPosition(); // Reset position with animation
            }
        },
        handleMouseMove(event) {
            if (!this.followCursor) return;
            this.moveDot(event.clientX, event.clientY);
        },
        moveDot(cursorX, cursorY) {
            const dot = document.getElementById('blue-dot');
            dot.style.animation = 'none'; // Stop bouncing when following

            // Offset values
            const offsetX = 50;
            const offsetY = 50;
            dot.style.right = `${window.innerWidth - cursorX - offsetX}px`;
            dot.style.bottom = `${window.innerHeight - cursorY - offsetY}px`;
        },
        resetDotPosition() {
            const dot = document.getElementById('blue-dot');
            dot.style.right = '120px';
            dot.style.bottom = '10px';
            dot.style.animation = 'bounce 2s infinite';
        }

    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.checkScroll);
        window.removeEventListener('mousemove', this.moveDot);
    }
}
</script>
<style>

  .red{
    background-color: lightgoldenrodyellow;
    height: 400px !important;
  }

  .blue{
    background-color: lightblue;
    height: 400px !important;
  }

  .expand {    
    width: calc(100vw - 50%);
    position: absolute;
    right: 0;

}
.hollow {
    margin-bottom: -45px;
    text-align: center;
    line-height: 1em;
    font-weight: 700;
    font-family: Roboto;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-shadow: 0px 0px 1px #1A202C;
    color: white;
}

.hollow.display-lg-1 {
    font-size: 6rem;
}

#blue-dot {
    z-index: 5000;
    width: 30px;
    height: 30px;
    background-color: var(--blue);
    position: fixed;
    bottom: 10px;
    /* Starting position */
    right: 120px;
    border-radius: 50%;
    box-shadow: 0 0 30px var(--blue);
    animation: bounce 2s infinite;
    transition: right 0.5s ease, bottom 0.5s ease;
    /* Smooth transition */
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

/* Add this to your <style> section */
.no-bounce {
    animation: none;
}

.hundred {
    height: 120vh;
}

.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.hero-section {
    height: 100vh;
    width: 100vw;
    color: white;
    background-color: black;
}

.typewriter h1 {
    color: white;
    overflow: hidden;
    padding: 0;
    margin: 0;
    font-weight: 700;
}


.cursor {
    display: inline;
    border-right: .15em solid white;
    /* Cursor effect */
    width: 0;
}

.blinking-cursor {
    animation: blink-caret 1s step-end infinite;
}

#text {
    text-decoration: underline;
    color: var(--blue);
}

/* Cursor animation */
@keyframes blink-caret {

    from,
    to {
        border-color: transparent;
    }

    50% {
        border-color: white;
    }
}
</style>