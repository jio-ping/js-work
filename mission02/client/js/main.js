/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = document.querySelector(".nav");

let soundConfirm = window.confirm(
  "🔈 엘리멘탈 친구들의 목소리를 들어보겠어요?"
);

function clickHandler(e) {
  const li = e.target.closest("li");
  if (!li) return;
  const list = Array.from(li.parentElement.children);
  list.forEach((li) => li.classList.remove("is-active"));
  li.classList.add("is-active");
  let selectedIndex = li.dataset.index - 1;
  setBgColor(selectedIndex);
  setNameText(selectedIndex);
  setImage(selectedIndex);
  if (soundConfirm) setAudio(selectedIndex);
}

function setBgColor(index) {
  const bgColor = data[index]["color"];
  document.body.style[
    "background"
  ] = `linear-gradient(to bottom,${bgColor[0]},${bgColor[1]})`;
}

function setImage(index) {
  const name = data[index]["name"].toLowerCase();
  const visual = document.querySelector(".visual img");
  visual.src = `./assets/${name}.jpeg`;
  visual.alt = data[index]["alt"];
}

function setNameText(index) {
  let nickName = document.querySelector(".nickName");
  nickName.innerHTML = data[index]["name"];
}

function setAudio(index) {
  const name = data[index]["name"].toLowerCase();
  let audio = new Audio(`./assets/audio/${name}.m4a`);
  audio.load();
  //웨이드 너무 시끄러워요
  if (name === "wade") {
    audio.volume = 0.5;
    audio.play();
    return;
  }
  audio.volume = 1;
  audio.play();
}

nav.addEventListener("click", clickHandler);
