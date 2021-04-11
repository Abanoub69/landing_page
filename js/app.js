"use strict";

// selecting the navbar menu
const navbar = document.querySelector(".navbar__menu");
// selecting the navbar list
const navbarList = document.querySelector("#navbar__list");
// selecting all sections in one variable
const sections = document.querySelectorAll("section");
// create small button to go to the top of the page
const btn = document.createElement("button");
// add button text
btn.innerHTML = "Go Up";
// add button class
btn.classList.add("btn");
// creating the Navigation
// select the section from sections
sections.forEach(function (section) {
  // get section's data nav
  const sectionData = section.dataset.nav;
  // get section's Id
  const sectionId = section.id;
  // create List item element
  const listItems = document.createElement("li");
  // insert the link in the list item
  listItems.innerHTML = `<a href="#${sectionId}" class="menu__link">${sectionData}</a>`;
  // add list item to the navbar
  navbarList.insertAdjacentElement("beforeend", listItems);
  // add event when click the list item
  listItems.addEventListener("click", function (e) {
    // set the default event
    e.preventDefault();
    // scroll the item to the select section by smooth mode
    section.scrollIntoView({ behavior: "smooth" });
    // insert the button go up in the section
    section.querySelector("div").insertAdjacentElement("afterend", btn);
    // add event when click the button
    btn.addEventListener("click", (e) => {
      // set the default event
      e.preventDefault();
      // scroll the user to the top of the page by smooth mode
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
      // bemove the button after click
      btn.remove();
    });
  });
});

// intersection observer callBack function
const obsCallBack = function (entries) {
  // get the first entry
  const [entry] = entries;
  // add  active class to the target section when it in the viewport
  if (entry.isIntersecting) {
    entry.target.classList.add("your-active-class");
  } else {
    // remove active class from the section when it out of the viewport
    entry.target.classList.remove("your-active-class");
  }
};
// intersection observer options
const obsOptions = {
  root: null,
  threshold: 0.35,
};
// create intersection observer to observe the sections from the viewport
const observer = new IntersectionObserver(obsCallBack, obsOptions);
// selecto All sections to be observe
sections.forEach(function (section) {
  observer.observe(section);
});
