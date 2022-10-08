const hamburger = document.querySelector("#hamburger");
const parentList = document.querySelector(".lister");
const btnDownload = document.querySelector(".btnDownload");
const parentFaq = document.querySelectorAll(".faq");

// let arrow = document.querySelectorAll(".material-symbols-outlined");
// let titleHeading = document.querySelectorAll(".titling");
// let descFaq = document.querySelectorAll(".descriptions");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  parentList.classList.toggle("invisible");
  btnDownload.classList.toggle("invisible");
});

// parentFaq.forEach((el) => {
//   el.addEventListener("click", (e) => {

// parentFaq.classList.toggle("bg-secondary");
// parentFaq.classList.toggle("shadow-xxl");
//   });
// });

parentFaq.forEach((el) => {
  el.addEventListener("click", (e) => {
    el.classList.toggle("bg-secondary");
    el.classList.toggle("shadow-xxl");
    el.classList.toggle("mt-[10px]");
  });

  const answer = el.querySelector(".answer");
  el.addEventListener("click", (e) => {
    answer.classList.toggle("hidden");
    answer.classList.toggle("text-[#ffffff]");
  });

  const titleHeading = el.querySelector(".titling");
  el.addEventListener("click", (e) => {
    titleHeading.classList.toggle("text-[#ffffff]");
  });

  const arrow = el.querySelector(".material-symbols-outlined");
  el.addEventListener("click", (e) => {
    arrow.classList.toggle("scale-y-[-1]");
    arrow.classList.toggle("text-[#ffffff]");
  });

  const liner = el.querySelector(".liner");
  el.addEventListener("click", (e) => {
    liner.classList.toggle("border-[#ffffff]");
  });
});
