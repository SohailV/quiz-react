import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Quiz() {
  const [quizArray, setQuizArray] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=30&category=9")
      .then((res) => res.json())
      .then((data) => setQuizArray(data.results));
  }, []);

  console.log("this is Quiz Array", quizArray);

  
  let random = () => Math.floor(Math.random() * 30);
  let currentQuest;
  let questElement;
  let count = 0
  
  let FinalElement = () => {
    
    if (quizArray.length > 0) {
      let currentObject = quizArray[random()];
      currentQuest = currentObject.question;
      let incorrectOptions = currentObject.incorrect_answers;
      console.log("Current Object is", currentObject);
      const optionArray = [];
      optionArray.push(currentObject.correct_answer);
      incorrectOptions.forEach((element) => {
        optionArray.push(element);
      });
      
      
      
      questElement = (
        <>
          <h1>{currentQuest}</h1>
          <div>
            {optionArray.map((item) => (
              <>
                <input
                  type="radio"
                  name={currentObject.correct_answer}
                  value={item}
                  id={count}
                />
                <label htmlFor={count++}>{item}</label>
              </>
            ))}
          </div>
          <hr></hr>
        </>
      );
    }

    return questElement;
  };

  

  
// console.log("All Inputs", inputs)

  function bclicked(event) {
    //   if(event.tagName === "Input") {
    //       console.log("input clicked")
    //   }
    //   else {
    //     console.log("I dont know")
    //   }
    const inputs = Array.from(document.querySelectorAll('input'))
      if (inputs.length> 0){
        inputs.forEach(input => input.addEventListener("click", bclicked)) 
        console.log("zero input",inputs)     
      }
    console.log("i was clicked", event);
    
  }

  return (
    <section className="quiz">
      <FinalElement />
      <FinalElement />
      <FinalElement />
      <FinalElement />
      <FinalElement />

      <button
        type="button"
        className="start-quiz quiz-button"
        id="checkAns"
        onClick={bclicked}
      >
        Check Answers
      </button>
    </section>
  );
}
