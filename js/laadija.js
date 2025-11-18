// Sain selle siit videost: https://www.youtube.com/watch?v=evmu1ABASaU
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target)
            }
        });
    },
    {
        rootMargin: "0px",
        threshold: [0, 0.6, 1]
    }
);

const tags = document.querySelectorAll(".animatsioon");

tags.forEach((tag) => {
    observer.observe(tag);
});
