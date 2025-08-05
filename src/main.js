"use strict";

const toggleBtns = document.getElementsByClassName("faq-header");

for (const toggleBtn of toggleBtns) {
  toggleBtn.style.cursor = "pointer";
  toggleBtn.addEventListener("click", (event) => {
    const faqBody = toggleBtn.nextElementSibling;
    const toggleIcon = toggleBtn.children[1];
    faqBody.classList.toggle("hidden");

    if (faqBody.classList.contains("hidden")) {
    }
  });
}
