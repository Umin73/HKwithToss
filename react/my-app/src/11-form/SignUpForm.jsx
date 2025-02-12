import React, { useState } from "react";
import axios from "axios";
// HTTP 통신 모듈: axios
// JS에서 HTTP 통신하는 방법 3가지: jQuery(ajax 함수), fetch(), axios()

function SignUpForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // form 태그의 submit 기능을 막음

    if (!username || !password || !gender) {
      alert("Please fill in all fields");
      return;
    }

    //JSON 문자열 : Key - Value
    //JS Object객체 : Key - Value
    //Java 클래스객체 : Key - Value
    //     Map : Key - Value
    //Python Dictionary : Key - Value
    try {
      // 노드 서버로 회원가입 데이터 전송
      const response = await axios.post(
        "http://localhost:3030/signup",
        {
          username,
          password,
          gender,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:", response.data);
      alert("Sign-up successful!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occured during sign-up");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        사용자명:
        <input type="text" value={username} onChange={handleChangeUsername} />
      </label>
      <br />
      <label>
        비밀번호:
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
      </label>
      <br />
    </form>
  );
}
