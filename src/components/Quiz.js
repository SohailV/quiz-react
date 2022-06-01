import React from 'react';
import { useEffect, useState } from "react";
import Qna from "./Qna";

export default function Quiz() {
  // Quiz Array fetched from the API
  const [quizArray, setQuizArray] = useState([]);
  // Load constant to Reload the Page after Quiz Completion
  const [load, setLoad] = useState(0);
  // To fetch the data once from the API
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuizArray(data.results));
  }, [load]);
  // Adding the Selected option by the user to the Array. Storing only one value per question
  let singleOption = [];
  // To handle the Single Option on click
  const handleClick = (event) => {
    let inputId = event.target.id;
    let inputCorrect = event.target.name;
    let inputValue = event.target.value;
    let parent = document.getElementById(`${inputId}`).parentNode;
    let valueChanged = true;

    if (singleOption.length === 0) {
      singleOption.push({
        id: inputId,
        value: inputValue,
        correctAns: inputCorrect,
        qid: parent.id,
      });
    } else {
      // Checking for any past Single Option data added.
      singleOption.forEach((item, index, array) => {
        if (item.qid === parent.id) {
          array[index] = {
            id: inputId,
            value: inputValue,
            correctAns: inputCorrect,
            qid: parent.id,
          };
          valueChanged = false;
          return;
        } else {
          if (index === array.length - 1 && valueChanged) {
            array.push({
              id: inputId,
              value: inputValue,
              correctAns: inputCorrect,
              qid: parent.id,
            });
          }
        }
      });
    }
  };
  // Checking for the right Answers
  let rightCount = 0;
  function checkAns() {
    if (document.getElementById("checkAns").textContent === "Play Again") {
      // Loading New five Questions
      document.getElementById("checkAns").textContent = "Check Answers";
      document.getElementById("score").textContent = "";
      setLoad((oldLoad) => oldLoad + 1);
    } else if (singleOption.length === 0) { 
        document.getElementById(
            "score"
          ).textContent = "Please Select Atleast 1 Option";
    }else {
      singleOption.forEach((item) => {
        if (item.value === item.correctAns) {
          // Incrementing number of right answers
          rightCount++;
          document.getElementById(
            `${item.id}`
          ).nextElementSibling.style.backgroundColor = "#94D7A2";
          document.getElementById(
            "score"
          ).textContent = `You scored ${rightCount}/5 correct answers`;
        } else {
          // Highlighting wrong answers.
          document.getElementById(
            `${item.id}`
          ).nextElementSibling.style.backgroundColor = "#F8BCBC";
          document.getElementById(`${item.id}`).nextElementSibling.style.color =
            "#293264";
          document.getElementById(
            "score"
          ).textContent = `You scored ${rightCount}/5 correct answers`;
        }
        // Corrext Answer Array
        let correctAnsArr = singleOption.map((item) => [
          item.qid,
          item.correctAns,
        ]);
        // Highlighting All the Right Answers.
        correctAnsArr.forEach((item) => {
          let qid = document.getElementById(`${item[0]}`);
          let children = qid.children;
          for (let i = 0; i < children.length; i++) {
            if (children[i].value === item[1]) {
              document.getElementById(
                `${children[i].id}`
              ).nextElementSibling.style.backgroundColor = "#94D7A2";
            }
          }
        });
      });
      // Disabling options after submitting the answers.
      let element = document.getElementsByTagName("input"),
        index;
      for (index = element.length - 1; index >= 0; index--) {
        element[index].disabled = true;
      }
      // Changing text of the button element
      document.getElementById("checkAns").textContent = "Play Again";
    }
  }

  return (
    <section className="quiz">
      {/* Conditional Rendering */}
      {quizArray.length > 0 ? (
        <>
          <Qna arr={quizArray} handleClick={handleClick} qid="0" />
          <Qna arr={quizArray} handleClick={handleClick} qid="1" />
          <Qna arr={quizArray} handleClick={handleClick} qid="2" />
          <Qna arr={quizArray} handleClick={handleClick} qid="3" />
          <Qna arr={quizArray} handleClick={handleClick} qid="4" />
        </>
      ) : (
        <h1>Loading...!!!</h1>
      )}

      <div className="score-button">
        <p id="score"></p>
        <button
          type="button"
          className="start-quiz quiz-button"
          id="checkAns"
          onClick={checkAns}
        >
          Check Answers
        </button>
      </div>
    </section>
  );
}
