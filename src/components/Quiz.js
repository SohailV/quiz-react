import { useEffect, useState } from "react";
import Qna from "./Qna";

export default function Quiz() {
  const [quizArray, setQuizArray] = useState([]);
  const justOnce = 1;
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=30&category=9")
      .then((res) => res.json())
      .then((data) => setQuizArray(data.results));
  }, [justOnce]);

  console.log("this is Quiz Array", quizArray);
  let singleOption = [];
  let valueChanged = true;
  const handleClick = (event) => {
    let inputId = event.target.id;
    let inputCorrect = event.target.name;
    let inputValue = event.target.value;

    if (singleOption.length === 0) {
      singleOption.push({
        id: inputId,
        value: inputValue,
        correctAns: inputCorrect,
      });
    } else {
      singleOption.forEach((item, index, array) => {
        if (item.correctAns === inputCorrect) {
          array[index] = {
            id: inputId,
            value: inputValue,
            correctAns: inputCorrect,
          };
          valueChanged = false;
          return;
        } else {
          if (index === array.length - 1 && valueChanged) {
            array.push({
              id: inputId,
              value: inputValue,
              correctAns: inputCorrect,
            });
          }
        }
      });
    }

    

    // item => item.correctAns === inputCorrect ?
    // (singleOption[singleOption.indexOf(item)] = {id: inputId, value: inputValue, correctAns: inputCorrect }) :
    // singleOption.push({"id" : inputId, "value" : inputValue, "correctAns": inputCorrect}))
    // , id:inputId, value: inputValue, correctAns: inputCorrect

    // singleOption.push({"id" : inputId, "value" : inputValue, "correctAns": inputCorrect})
    console.log("Array Test Single", singleOption);
  };

  function checkAns() {
      console.log("Ckeck Answer Clicked")
    singleOption.forEach(
        item=> item.value === item.correctAns ?
        // console.log("right ans", item.id) : console.log("wrong ans", item.id) 
        document.getElementById(`${item.id}`).nextElementSibling.style.backgroundColor = "#94D7A2" :
        document.getElementById(`${item.id}`).nextElementSibling.style.backgroundColor = "#F8BCBC"
        
        )
}

  return (
    <section className="quiz">
      <Qna arr={quizArray} handleClick={handleClick} qid="1" />
      <Qna arr={quizArray} handleClick={handleClick} qid="2" />
      <Qna arr={quizArray} handleClick={handleClick} qid="3" />
      <Qna arr={quizArray} handleClick={handleClick} qid="4" />
      <Qna arr={quizArray} handleClick={handleClick} qid="5" />

      <button
        type="button"
        className="start-quiz quiz-button"
        id="checkAns"
        onClick={checkAns}
      >
        Check Answers
      </button>
    </section>
  );
}
