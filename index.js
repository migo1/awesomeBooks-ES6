/* eslint-disable import/extensions */
import Book from "./modules/books.js";
import { DateTime } from "./node_modules/luxon/src/luxon.js";

const dateTime = () => {
  const date = document.querySelector("#currentDate");
  date.innerHTML = `${DateTime.now().toLocaleString(
    DateTime.DATE_MED,
  )}, ${DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS)}`;
};

dateTime();

setInterval(dateTime, 1000);

const booksForm = document.getElementById("bookForm");

const storeBook = new Book();
booksForm.addEventListener("submit", storeBook.addBook);

const links = document.querySelectorAll("nav a");
const section = document.querySelectorAll("section");

links.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("active");
    section.forEach((section) => {
      section.style.display = "none";
    });

    const sectionId = link.getAttribute("href").slice(1);
    document.getElementById(sectionId).style.display = "block";
  });
});

links[0].click();
