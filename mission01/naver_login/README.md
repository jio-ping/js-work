# 네이버 로그인 페이지 구현

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

## <img width="500" src="https://github.com/jio-ping/js-work/assets/134420660/a3d5e8f6-8d9e-4be4-9d86-a76727a7a241">

##### 1. email 정규표현식을 사용한 validation | pw 정규표현식을 사용한 validation (문자, 숫자, 특수문자 포함한 6-16자리)

```js
const valid = (param) => {
  if (param === email) {
    emailReg(email.value)
      ? email.classList.remove("is--invalid")
      : email.classList.add("is--invalid");
  } else if (param === pw) {
    pwReg(pw.value)
      ? pw.classList.remove("is--invalid")
      : pw.classList.add("is--invalid");
  }
};
```

##### 2. 상태 변수 관리.. 입력값과 user객체/db 의 id/pw 비교 함수

```js
const checkUser = (email, pw) => {
  if (email.value == user.id) {
    return pw.value == user.pw ? true : false;
  }
};
```

##### 3. 로그인 버튼을 클릭시 조건처리

```js
function Login(e) {
  e.preventDefault();
  if (checkUser(email, pw)) {
    window.location.href = "welcome.html";
  } else {
    alert("잘못된 아이디 또는 비밀번호여요👽");
  }
}
```

---

#### 궁금증

- validEmail + validPw => valid(param) : 비슷한 기능을 하는 함수를 인자별로 나눠서 새 함수로 작성하는게 좋을까요 ? 아니면 합쳐서 한 함수로 두는 게 좋을까요 ?
  <img width="400" alt="image" src="https://github.com/jio-ping/js-work/assets/134420660/8bac88e4-82a9-4f95-9fb4-bf4ff1100600">
- checkUser(emial,pw) : 위 질문과 비슷한 결인데, 로그인 실패시 이메일이 맞고 비밀번호가 틀렸다. 라고 고지하진 않으니, 각 기능을 분리하지 않고 이메일이 맞으면 비밀번호를 확인하는 순서로 함수를 작성했는데 분리하는 것이 좋을까요?
  <img width="400" alt="image" src="https://github.com/jio-ping/js-work/assets/134420660/a804c9ca-dde2-4667-a1a0-2c5dbc961355">

- 비밀번호 검증 정규표현식이 문자,숫자,특수문자를 포함한 6-16자 이길래
  input 태그에 max_length를 16, 에러메시지에 숫자도 포함하라고 수정했습니다. 너무 자세한 정보를 주면 (?) 보안상 위험때문에 일부러 안 쓰신걸까요 ?
