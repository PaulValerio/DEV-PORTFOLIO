const bgchange = document.querySelector(".bg-img");
const navchange = document.querySelector(".nav-bar");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const animClass = entry.target.dataset.animate;
    console.log(animClass);

    if (animClass) {
      entry.target.classList.toggle(animClass, entry.isIntersecting);
    }

    if (entry.target.classList.contains("projecth1")) {
      bgchange.classList.toggle("change-color", entry.isIntersecting);
      navchange.classList.toggle("change-color", entry.isIntersecting);
    }
  });
});

const todo = document.querySelectorAll(
  ".aboutp, .toolh1, .toolImg, .projecth1, .contact-container",
);
todo.forEach((el) => observer.observe(el));
