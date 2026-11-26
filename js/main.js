//MacBook  Carousel
const track = document.getElementById("carouselTrack");
const dots = document.querySelectorAll(".dot");
const total = 3;
let current = 0;
let autoPlay;

function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
}

document.getElementById("prevBtn").addEventListener("click", () => {
    clearInterval(autoPlay);
    goTo(current - 1);
    startAuto();
});
document.getElementById("nextBtn").addEventListener("click", () => {
    clearInterval(autoPlay);
    goTo(current + 1);
    startAuto();
});
dots.forEach((d) =>
    d.addEventListener("click", () => {
        clearInterval(autoPlay);
        goTo(+d.dataset.index);
        startAuto();
    }),
);

function startAuto() {
    autoPlay = setInterval(() => goTo(current + 1), 3500);
}
startAuto();

//_______________________________________________________________________________________
// Tab switching logic
document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.addEventListener("click", function () {
        document
            .querySelectorAll(".nav-tab")
            .forEach((t) => t.classList.remove("active"));
        this.classList.add("active");
    });
});
