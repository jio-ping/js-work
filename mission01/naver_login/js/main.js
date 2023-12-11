/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리 ➡️ 이게 모지 🧐
4. 로그인 버튼을 클릭시 조건처리

*/

/*

--1. 사용자 입력단계
    1. 이메일 유효검증
      - false면 해당 input에 is--invalid 추가
          node.classList.remove('is--invalid')
    - true면 해당 input에 is--invalid 제거
          node.classList.add('is--invalid')


    2.비밀번호 유효검증
    - false면 해당 input에 is--invalid 추가
          node.classList.remove('is--invalid')
    - true면 해당 input에 is--invalid 제거
          node.classList.add('is--invalid') 


--2. 로그인 버튼 클릭
    1. 아이디가 맞냐? 
      value === user.id 
    && 
    2. 비밀번호 맞냐?
    value === user.pw
      =>   welcome.html 으로 이동 

*/
// 이메일과 비밀번호 정규표현식 검사
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
//
const email = document.getElementById("userEmail");
const pw = document.getElementById("userPassword");
const loginButton = document.querySelector(".btn-login");
const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*
 비슷한 기능을 하는 함수를 인자별로 나눠서 새 함수로 작성하는게 좋을까요 ?
 아니면 합쳐서 한 함수로 두는 게 좋을까요 ? 


*/

const validEmail = () =>
  emailReg(email.value)
    ? email.classList.remove("is--invalid")
    : email.classList.add("is--invalid");

const validPw = () => {
  pwReg(pw.value)
    ? pw.classList.remove("is--invalid")
    : pw.classList.add("is--invalid");
};
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

// user 정보 확인

/*
  🧐  
  로그인 실패시  이메일이 맞고 비밀번호가 틀렸다 라고 고지하진 않으니 ,
  분리하지 않고 이메일 맞으면 비밀번호를 확인하도록 checkUser 함수를 짰는데 ..
  실무에선 하나하나 분리하는 편일까요? ??


*/

const checkEmail = (email) => (email.value === user.id ? true : false);
const checkPw = (pw) => (pw.value === user.pw ? true : false);

const checkUser = (email, pw) => {
  if (email.value == user.id) {
    return pw.value == user.pw ? true : false;
  }
};

// 로그인
/*

  Login 함수를 호출해 성공할때마다 같은 페이지로 이동하진 않을거같은데 
   Login 함수에 window.location.href ="welcome.html"을 써도 될까요 ? 

*/
function Login(e) {
  e.preventDefault();
  if (checkUser(email, pw)) {
    window.location.href = "welcome.html";
  } else {
    alert("잘못된 아이디 또는 비밀번호여요👽");
  }
}

//이벤트 리스너
email.addEventListener("input", () => valid(email));
pw.addEventListener("input", () => valid(pw));
loginButton.addEventListener("click", (e) => Login(e));

//클로저 ?
const createLoginForm = () => {
  const email = document.getElementById("email");
  const pw = document.getElementById("pw");
  let emailPass = false;
  let pwPass = false;

  function emailReg(text) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(text).toLowerCase());
  }

  function pwReg(text) {
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
    return re.test(String(text).toLowerCase());
  }
  //

  const validEmail = () => {
    let value = this.value;
    if (emailReg(value)) {
      email.classList.remove("is--invalid");
      emailPass = true;
    } else {
      email.classList.add("is--invalid");
      emailPass = false;
    }
  };

  const validPw = () => {
    let value = this.value;
    if (pwReg(value)) {
      pw.classList.remove("is--invalid");
      pwPass = true;
    } else {
      pw.classList.add("is--invalid");
      pwPass = false;
    }
  };

  const checkUser = (user) => {
    return email.value === user.id && pw.value === user.pw;
  };

  const login = (e) => {
    e.preventDefault();
    if (checkUser(currentUser)) {
      window.location.href = "welcome.html";
    } else {
      alert("잘못된 아이디 또는 비밀번호여요👽");
    }
  };

  return {
    validEmail,
    validPw,
    login,
    emailPass,
  };
};
