
"use strict";
const body = document.querySelector("body");
const header = document.querySelector(".page__header");
const navbar = document.querySelector(".navbar__menu");
const navbarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const btn = document.createElement("button");
btn.innerHTML = "Go To Up";
btn.classList.add("btn");
// creating the Navigation
navbarList.innerHTML = `
<li><a href="section1" class="menu__link" data-num="1">section 1</a>1</li>
<li><a href="section2" class="menu__link" data-num="2">section 2</a>2</li>
<li><a href="section3" class="menu__link" data-num="3">section 3</a>3</li>
<li><a href="section4" class="menu__link" data-num="4">section 4</a>4</li>
<li><a href="section5" class="menu__link" data-num="5">section 5</a>5</li>
<li><a href="section6" class="menu__link" data-num="6">section 6</a>6</li>
`;
const listItems = document.querySelectorAll("li");
listItems.forEach(function (item) {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const mainTarget = e.target;
    const listNum = mainTarget.dataset.num;
    const sectionTarget = document.querySelector(`#section${listNum}`);
    sectionTarget.scrollIntoView({ behavior: "smooth" });
    console.log(sectionTarget);
    sectionTarget.querySelector("div").insertAdjacentElement("afterend", btn);
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
      btn.remove();
    });
  });
});
const obsCallBack = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("your-active-class");
  entry.target.classList.add("your-active-class");
};
const obsOptions = {
  root: null,
  threshold: 0.8,
};
const observer = new IntersectionObserver(obsCallBack, obsOptions);
sections.forEach(function (section) {
  observer.observe(section);
});
