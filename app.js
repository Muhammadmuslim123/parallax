const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
    yValue = 0;
let isThrottled = false;

window.addEventListener("mousemove", (e) => {
    if (!isThrottled) {
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;

        parallax_el.forEach((el) => {
            let speedx = el.dataset.speedx;
            let speedy = el.dataset.speedy;

            el.style.transform = `translateX(calc(-50% + ${xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
        });

        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;
        }, 16); // Update roughly every 16 milliseconds (equivalent to 60 frames per second)
    }
});


// GSAP Animation

// let timeline = gsap.timeline();

// Array.from(parallax_el)
// .filter((el) => !el.classList.contains("text"))
// .forEach((el) => {
//     timeline.from(
//         el,
//         {
//             top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
//             duration: 3.5,
//             ease: "power3.out"
//         },
//         "1"
//     );
// });

// timeline.from(".text h1",{})