## 엘리멘탈 영화 포스터 과제

### 시연

<img width="500" src="https://github.com/jio-ping/js-work/assets/134420660/8ebbe71c-e3ea-42d4-a110-593c3641b8ef">

#### 1. 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.

```js
function clickHandler(e) {
  //이벤트 위임
  const li = e.target.closest("li");
  if (!li) return;
  const list = Array.from(li.parentElement.children);
  //반복문
  list.forEach((li) => li.classList.remove("is-active"));
  li.classList.add("is-active");
  let selectedIndex = li.dataset.index - 1;
  setBgColor(selectedIndex);
  setNameText(selectedIndex);
  setImage(selectedIndex);
  if (soundConfirm) setAudio(selectedIndex);
}
```

#### 2. 이미지와 색상의 데이터는 `data.js` 에서 불러와 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.

```js
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
```

#### 3. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요

```js
function setNameText(index) {
  let nickName = document.querySelector(".nickName");
  nickName.innerHTML = data[index]["name"];
}
```

#### 4. 오디오 함수

```js
let soundConfirm = window.confirm(
  "🔈 엘리멘탈 친구들의 목소리를 들어보겠어요?"
);

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
```
