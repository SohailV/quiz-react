import { useEffect, useState } from "react";

export default function Qna(props) {
  let random = () => Math.floor(Math.random() * 30);
  let currentQuest;
  let questElement;
  let count = Math.floor(Math.random() * 10000);
  
  let FinalElement = () => {
    if (props.arr.length > 0) {
      let currentObject = props.arr[random()];
      currentQuest = <h1 id={props.qid}>{currentObject.question}</h1>;
      let incorrectOptions = currentObject.incorrect_answers;
      //   console.log("Current Object is", currentObject);
      const optionArray = [];
      optionArray.push(currentObject.correct_answer);
      incorrectOptions.forEach((element) => {
        optionArray.push(element);
      });
      //   inputs = Array.from(document.querySelectorAll('input'))

      questElement = (
        <>
          {currentQuest}
          <div>
            {optionArray.map((item) => (
              <>
                <input
                  type="radio"
                  name={currentObject.correct_answer}
                  value={item}
                  id={count}
                  onClick={props.handleClick}
                  
                />
                <label key={item} htmlFor={count++}>
                  {item}
                </label>
              </>
            ))}
          </div>
          <hr></hr>
        </>
      );
    }

    return questElement;
  };

  return (
    <>
      <FinalElement />
    </>
  );
}
