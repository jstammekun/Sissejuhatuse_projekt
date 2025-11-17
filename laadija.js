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
        threshold: 0
    }
);

const tags = document.querySelectorAll(".animatsioon");

tags.forEach((tag) => {
    observer.observe(tag);
});

entries.forEach((entry) => {
    console.log("Checking:", entry.target);        // <--- ADD THIS
    if (entry.isIntersecting) {
        console.log("IN VIEW:", entry.target);     // <--- ADD THIS
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target)
    }
});
