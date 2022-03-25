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

  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black_nav">개발 Blog</div>

      {/* <button
          onClick={() => {
            글제목변경(
              (글제목 = ["잠깨는법", "익산 순대국 맛집", "남자 코디 추천"])
            );
          }}
        >
          제목바꾸기
        </button> */
      /* <h3>
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
      </div> */}

      {글제목.map(function (i, a) {
        return (
          <div className="list" key={i}>
            <h3 onClick={() => {누른제목변경(a);}}>{i}</h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      
      {/* <input onChange = { (e) => {입력값변경 (e.target.value)}} /> */}
      
      <div className="publish">
        <input onChange = { (e) => {입력값변경 (e.target.value)}} />
        <button onClick={ () => { 
          let arraycopy = [...글제목];
          arraycopy.unshift(입력값);
          글제목변경( arraycopy );
        } }>저장</button>
      </div>

      <button onClick={() => {modal변경(modal + 1);}}>Modal</button>
      {modal % 2 === 0 
      ? <Modal 글제목={글제목} 누른제목={누른제목} ></Modal>
      : null}
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
      <h2>제목 { props.글제목[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
