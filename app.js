const grimm = document.querySelector(".grimm");
const items = document.querySelector(".items");
const links = document.querySelector(".items li");
const grimm1 = document.querySelector(".grimm1");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

grimm.addEventListener("click", () => {
  items.classList.toggle("open");
  grimm1.classList.toggle("open");
  line1.classList.toggle("open");
  line2.classList.toggle("open");
  line3.classList.toggle("open");
});
