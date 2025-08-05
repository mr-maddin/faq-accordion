"use strict";

const toggleBtns = document.getElementsByClassName("faq-header");

for (const toggleBtn of toggleBtns) {
  const faqBody = toggleBtn.nextElementSibling; //deklariert die Variable mit dem Geschwisterelement
  const plusIcon = toggleBtn.querySelector(".plusBtn"); //deklariert die Variable mit dem Klassenelement .plusBtn vom Mutterelement
  const minusIcon = toggleBtn.querySelector(".minusBtn"); //deklariert die Variable mit dem Klassenelement .minusBtn vom Mutterelement
  toggleBtn.style.cursor = "pointer"; //macht aus dem gesamten Abschnitt einen Cursor

  faqBody.classList.add("hidden"); //macht, dass der Content vor der Funktion eingeklappt ist

  toggleBtn.addEventListener("click", () => {
    //Funktion ein und ausklappen
    faqBody.classList.toggle("hidden");

    if (faqBody.classList.contains("hidden")) {
      //IF Abfrage, ob der Abschnitt eingeklappt ist oder nicht
      plusIcon.classList.remove("hidden"); //bei eingeklappt soll der Plus Button angezeigt werden
      minusIcon.classList.add("hidden"); //bei eingeklappt soll der Minus Button verborgen werden; Weiter unten genau umgekehrt
    } else {
      plusIcon.classList.add("hidden");
      minusIcon.classList.remove("hidden");
    }
  });
}
