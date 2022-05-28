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

  const [fiveQuestEle, setFiveQuestEle] = useState([]);
  let random = () => Math.floor(Math.random() * 30);
  let currentQuest;
  let questElement;
  let FinalElement = () => {
      if (quizArray.length > 0) {
    let currentObject = quizArray[random()];
    currentQuest = currentObject.question
    let incorrectOptions = currentObject.incorrect_answers;
    console.log("Current Object is", currentObject);
    const optionArray = [];
    optionArray.push(currentObject.correct_answer);
    incorrectOptions.forEach(element => {
        optionArray.push(element);
    });
    console.log("Incorrect are", incorrectOptions);
    console.log("options are", optionArray);
    
    questElement= <>
       <h1>{currentQuest}</h1>
       <div>
           {optionArray.map(item => <>
            <input type="radio" name={currentObject.correct_answer} value={item} id={item} />
              <label htmlFor={item}>{item}</label>
           </>)}
            </div>
            <hr></hr>
       </>   

  }
  return questElement
}

function bclicked() {
    console.log("clicked")
}
//   setFiveQuestEle(oldElements => ({...oldElements, questElement}))
//   console.log("newElements", fiveQuestEle)
  //   incorrectOptions.array.forEach(element => {
  //     optionArray.push(element)
  //   });
  

  //   let questions = [];
  //   questions.length = 5;
  //   const [options, setOptions] = useState([])

  //   function qna() {

  //     if (quizArray.length > 0) {
  //         for (let i = 0; i < 5; i++) {
  //           const questionNum = Math.floor(Math.random() * 30);
  //           let currentQuest = quizArray[questionNum]
  //           questions.push(currentQuest);
  //           let incorrectOptions = currentQuest.incorrect_answers
  //           let correctOption = currentQuest.correct_answers
  //           setOptions(incorrectOptions)
  //           setOptions(oldOption => ({...oldOption, correctOption}))
  //           console.log(options)
  //         }
  //   } else {
  //     qna();
  //   }

  //   }
  //   const [o, setO] = useState([]);
  //   const [qel, setQel] = useState([]);
  //   if (quizArray.length > 0) {
  //     let questionNum = Math.floor(Math.random() * 30);
  //     let currentQuest = quizArray[questionNum];
  //   }

  //   console.log(quizArray);

  //   let questionElement = questions.map(item =>
  //   <>
  //   <h1>{quizArray.length == 0 ? "Loading..." : item.question}</h1>
  //   <div>
  //          <input type="radio" name={item.correct_answer} value={item.correct_answer} id={item.correct_answer} />
  //          <label htmlFor={item.correct_answer}>{item.correct_answer}</label>
  //          <input type="radio" name={item.incorrect_answers[0]} value={item.incorrect_answers[0]} id={item.incorrect_answers[0]} />
  //          <label htmlFor={item.incorrect_answers[0]}>{item.incorrect_answers[0]}</label>
  //          <input type="radio" name={item.incorrect_answers[1]} value={item.incorrect_answers[1]} id={item.incorrect_answers[1]} />
  //          <label htmlFor={item.incorrect_answers[1]}>{item.incorrect_answers[1]}</label>
  //          <input type="radio" name={item.incorrect_answers[2]} value={item.incorrect_answers[2]} id={item.incorrect_answers[2]} />
  //          <label htmlFor={item.incorrect_answers[2]}>{item.incorrect_answers[2]}</label>
  //        </div>
  //        <hr></hr>
  //   </>

  //   );

  return (
    <section className="quiz">
        <FinalElement />
        <FinalElement />
        <FinalElement />
        <FinalElement />
        <FinalElement />
        
      {/* {questionElement} */}
      {/* {questionElement}
      <div>
        <input type="radio" name="Spanish" value="Adios" id="Adios" />
        <label htmlFor="Adios">Adios</label>
        <input type="radio" name="Spanish" value="Hola" id="Hola" />
        <label htmlFor="Hola">Hola</label>
        <input type="radio" name="Spanish" value="Au Revior" id="Au Revior" />
        <label htmlFor="Au Revior">Au Revior</label>
        <input type="radio" name="Spanish" value="Salir" id="Salir" />
        <label htmlFor="Salir">Salir</label>
      </div>
      <hr></hr>

      <h1>How do You say goodbye in Spanish</h1>
      <div>
        <input type="radio" name="Test1" value="Adios" id="Temp1" />
        <label htmlFor="Temp1">Adios</label>
        <input type="radio" name="Test1" value="Hola" id="Temp2" />
        <label htmlFor="Temp2">Hola</label>
        <input type="radio" name="Test1" value="Au Revior" id="Temp3" />
        <label htmlFor="Temp3">Au Revior</label>
        <input type="radio" name="Test1" value="Salir" id="Temp4" />
        <label htmlFor="Temp4">Salir</label>
      </div>
      <hr></hr>

      <h1>How do You say goodbye in Spanish</h1>
      <div>
        <input type="radio" name="test2" value="Adios" id="Temp5" />
        <label htmlFor="Temp5">Adios</label>
        <input type="radio" name="test2" value="Hola" id="Temp6" />
        <label htmlFor="Temp6">Hola</label>
        <input type="radio" name="test2" value="Au Revior" id="Temp7" />
        <label htmlFor="Temp7">Au Revior</label>
        <input type="radio" name="test2" value="Salir" id="Temp8" />
        <label htmlFor="Temp8">Salir</label>
      </div>
      <hr></hr>

      <h1>How do You say goodbye in Spanish</h1>
      <div>
        <input type="radio" name="test3" value="Adios" id="Temp9" />
        <label htmlFor="Temp9">Adios</label>
        <input type="radio" name="test3" value="Hola" id="Temp10" />
        <label htmlFor="Temp10">Hola</label>
        <input type="radio" name="test3" value="Au Revior" id="Temp11" />
        <label htmlFor="Temp11">Au Revior</label>
        <input type="radio" name="test3" value="Salir" id="Temp12" />
        <label htmlFor="Temp12">Salir</label>
      </div>
      <hr></hr> */}

      <button type="button" className="start-quiz quiz-button" id="checkAns" onClick={bclicked}>
        Check Answers
      </button>
    </section>
  );
}
