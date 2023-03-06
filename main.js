const card = document.querySelector(".card__inner");
const options = document.getElementsByClassName("option")

Array.from(options).forEach((option) => {
  option.addEventListener("click", () => {
    card.classList.toggle('is-flipped');
  });
})
