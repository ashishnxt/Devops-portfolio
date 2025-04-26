// Add this JavaScript to handle smooth animations
  document.addEventListener('DOMContentLoaded', function() {
    // Handle initial load animations
    const initialAnimElements = document.querySelectorAll('.grid-wrapper .tall, .grid-wrapper .box, .grid-wrapper .big, .grid-wrapper .wide2');
    
    // Add small timeout to ensure elements animate after page load
    setTimeout(() => {
        initialAnimElements.forEach(element => {
            element.classList.add('show-initial');
        });
    }, 100);

    // Intersection Observer for scroll animations (existing ones)
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Only add visible class to elements that don't have initial load animation
                const isInitialAnimElement = entry.target.classList.contains('tall') || 
                                          entry.target.classList.contains('box') || 
                                          entry.target.classList.contains('big') ||
                                          entry.target.classList.contains('wide2');
                
                if (!isInitialAnimElement) {
                    entry.target.classList.add('visible');
                }
            }
        });
    }, options);

    // Observe only elements that don't have initial load animation
    document.querySelectorAll('.grid-wrapper > div:not(.tall):not(.box):not(.big):not(.wide2)').forEach(item => {
        observer.observe(item);
    });
});
  


//----------------------------------------------------Testimonials------------------------------------------
const testimonials = [
    {
        text: "Stefan has consistently helped us to move the needle over the past 2 years at Ellucian: his design skills and s mature our des!",
        author: "Lacey Gerard"
    },
    {
        text: "Stefan's creativity and technical expertise were crucial in launching our new product. He is a true team player, and his it.",
        author: "Alex Johnson"
    },
    {
        text: "Working with Stefan has been an absolute pleasure. His ability to blend design and functionality is unmatched, making him a vit.",
        author: "Megan Smith"
    }
];

let currentIndex = 0;

function updateTestimonial() {
    const textElement = document.getElementById("testimonialText");
    const authorElement = document.getElementById("testimonialAuthor");

    textElement.classList.remove("active");
    authorElement.classList.remove("active");

    setTimeout(() => {
        textElement.textContent = testimonials[currentIndex].text;
        authorElement.textContent = testimonials[currentIndex].author;

        textElement.classList.add("active");
        authorElement.classList.add("active");
    }, 500);
}

function prevTestimonial() {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial();
}

function nextTestimonial() {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    updateTestimonial();
}
// ---------------------------------------------------------------------------------------------------------- 