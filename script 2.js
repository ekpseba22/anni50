document.querySelectorAll('.card').forEach(card => {
    let clickCount = 0;

    card.addEventListener('click', () => {
        clickCount++;

        if (clickCount === 1) {
            card.classList.add('expanded');
        } else if (clickCount === 2) {
            card.classList.add('zoomed');
        } else if (clickCount === 3) {
            card.classList.remove('expanded', 'zoomed');
            clickCount = 0; // Reset per il prossimo ciclo
        }
    });
});
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        // Restringe tutte le altre card
        cards.forEach(c => c.classList.remove("expanded"));
        
        // Espande solo la card cliccata
        card.classList.add("expanded");
    });
});
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        document.body.classList.add('zoomed-active');
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('transitionend', function() {
        if (!card.classList.contains('zoomed')) {
            document.body.classList.remove('zoomed-active');
        }
    });
});
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 3000); // Cambia immagine ogni 3 secondi

function scrollToTimeline() {
    document.querySelector('.wrapper').scrollIntoView({ behavior: 'smooth' });
}
const text = "Anni '50: Il Decennio delle Innovazioni";
let i = 0;
const speed = 70; // Velocità di digitazione
const resetDelay = 3000; // Tempo prima di ricominciare (5 sec)

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(resetText, resetDelay); // Aspetta 5 secondi e resetta
    }
}

function resetText() {
    document.getElementById("typed-text").innerHTML = ""; // Cancella testo
    i = 0; // Reset contatore
    typeEffect(); // Riparte la digitazione
}

window.onload = typeEffect;
window.addEventListener("scroll", function() {
    let timelineLine = document.querySelector(".timeline-line");
    let events = document.querySelectorAll(".timeline-event");
    let timelinePos = timelineLine.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (timelinePos < windowHeight * 0.8) {
        timelineLine.classList.add("visible");
        events.forEach(event => event.classList.add("visible"));
    }
});
document.addEventListener("scroll", function () {
    let timeline = document.querySelector(".timeline");
    let events = document.querySelectorAll(".event");
    let position = timeline.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
        timeline.classList.add("animate");
        events.forEach((event, index) => {
            setTimeout(() => {
                event.classList.add("show");
            }, index * 500);
        });
    }
});
document.getElementById("scrollToTimeline").addEventListener("click", function() {
    let timelineSection = document.getElementById("time-line");

    if (time-lineSection) {
        time-lineSection.classList.add("animated"); // Attiva l'animazione
        setTimeout(() => {
            time-lineSection.scrollIntoView({ behavior: "smooth" }); // Scrolla fino alla timeline dopo un piccolo ritardo
        }, 500); 
        console.log("Animazione attivata!"); // Debug per controllare l'effetto
    } else {
        console.error("Sezione timeline non trovata!");
    }
});
const videos = ["46.3-85.0.mp4", "16.5-25.7 (1).mp4"]; // Lista dei video
let currentVideoIndex = 0;
const videoElement = document.querySelector(".background-video");
const sourceElement = document.getElementById("video-source");

videoElement.addEventListener("ended", function() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length; // Alterna tra i video
    sourceElement.src = videos[currentVideoIndex];
    videoElement.load(); // Ricarica il video per farlo partire
    videoElement.play(); // Assicura che parta subito dopo il cambio
});

