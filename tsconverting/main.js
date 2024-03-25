"use strict";
const data = [
    {
        color: ["#ff6a00", "#720400"],
        name: "EMBER",
        alt: "엠버 포스터",
    },
    {
        color: ["#1ca9f8", "#000054"],
        name: "WADE",
        alt: "웨이드 포스터",
    },
    {
        color: ["#98d00f", "#002906"],
        name: "CLOD",
        alt: "클로드 포스터",
    },
    {
        color: ["#d968e6", "#30003c"],
        name: "GALE",
        alt: "게일 포스터",
    },
];
const body = document.querySelector("body");
const nav = document.querySelector("#nav");
const heading = document.querySelector("#characterName");
const poster = document.querySelector("#mainPoster");
function handleNavImage(e) {
    const selectedPoster = e.target.closest("li");
    if (!selectedPoster)
        return;
    const selectedData = data[selectedPoster.dataset.index];
    poster.src = `./assets/${selectedData.name.toLowerCase()}.jpeg`;
    heading.innerText = selectedData.name;
    body.style.background = `linear-gradient(${selectedData.color[0]},${selectedData.color[1]})`;
    Array.from(nav.children).map((item) => {
        item.classList.remove("is-active");
        selectedPoster.classList.add("is-active");
    });
}
nav?.addEventListener("click", handleNavImage);
