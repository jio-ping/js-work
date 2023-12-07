/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
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

    2. 비밀번호 맞냐?
    value === user.pw

  
    3. welcome.html 으로 옮겨 @  

*/

// 아이디
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const email = document.getElementById("userEmail");
const pwd = document.getElementById("userPassword");

const validEmail = () =>
  emailReg(email.value)
    ? email.classList.remove("is--invalid")
    : email.classList.add("is--invalid");

const validPwd = () => {
  pwReg(pwd.value)
    ? pwd.classList.remove("is--invalid")
    : pwd.classList.add("is--invalid");
};

const checkEmail = (email) => (email.value === user.id ? true : false);
const checkPwd = (pwd) => (pwd.value === user.pw ? true : false);

function Login() {
  if (checkEmail(email) && checkPwd(pwd)) {
    window.location.href = welcome.html;
  } else {
    alert("앙대!");
  }
}

const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};
