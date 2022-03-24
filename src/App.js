import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코디 추천",
    "익산 순대국 맛집",
    "잠깨는법",
  ]);

  let [like, likes] = useState(0);

  let [modal, modal변경] = useState(1);

  return (
    <div className="App">
      <div className="black_nav">개발 Blog</div>
      <div className="list">
        {/* <button
          onClick={() => {
            글제목변경(
              (글제목 = ["잠깨는법", "익산 순대국 맛집", "남자 코디 추천"])
            );
          }}
        >
          제목바꾸기
        </button> */}
        <h3>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              likes(like + 1);
            }}
          >
            👍
          </span>{" "}
          {like}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3
          onClick={() => {
            modal변경(modal + 1);
          }}
        >
          {글제목[2]}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <button
        onClick={() => {
          modal변경(modal + 1);
        }}
      >
        Modal
      </button>

      {modal % 2 === 0 ? <Modal></Modal> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
