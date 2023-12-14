/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = document.querySelector(".nav");
function clickHandler(e) {
  const ul = e.target.closest("ul");
  const li = e.target.closest("li");
  if (!li) return;

  //다른 프로퍼티로 잡는거 연습해볼것 !
  const list = [...ul.children];
  list.forEach((li) => li.classList.remove("is-active"));
  li.classList.add("is-active");

  setBgColor(li.dataset.index);
  setNameText(li.dataset.index);
  setImage(li.dataset.index);
  setAudio(li.dataset.index);
}

//배경 변경
function setBgColor(index) {
  const bgColor = data[index - 1]["color"];
  document.body.style[
    "background"
  ] = `linear-gradient(to bottom,${bgColor[0]},${bgColor[1]})`;
}

function setImage(index) {
  const name = data[index - 1]["name"].toLowerCase();
  const visual = document.querySelector(".visual img");
  visual.src = `./assets/${name}.jpeg`;
}

function setNameText(index) {
  const name = data[index - 1]["name"];
  let nickName = document.querySelector(".nickName");
  nickName.innerHTML = data[index - 1]["name"];
}

function setAudio(index) {
  const name = data[index - 1]["name"].toLowerCase();
  let audio = new Audio(`./assets/audio/${name}.m4a`);
  audio.load();
  audio.volume = 1;
  audio.play();
}

nav.addEventListener("click", clickHandler);
