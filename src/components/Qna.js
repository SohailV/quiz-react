
export default function Qna(props) {
  let currentQuest;
  let questElement;
  let count = Math.floor(Math.random() * 10000);
 
  // Decoding Function for converting HTML codes to plain Text.
  let decodeHTML = function (html) {
	let txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

  // Child Element Comprising the Single Module of a question and their options.
  let FinalElement = () => {
    
    if (props.arr.length > 0) {
        // Matching the Question Id with the API array
      let currentObject = props.arr[props.qid];
      // Decoding HTML Codes to plain Text. 
      let decoded = decodeHTML(currentObject.question);
      currentQuest = <h1>{decoded}</h1>;
      let incorrectOptions = currentObject.incorrect_answers;
        // Option Array as per Question
      const optionArray = [];
      let decodedAns = decodeHTML(currentObject.correct_answer);  
      optionArray.push(decodedAns);
      incorrectOptions.forEach((element) => {
        let decoded = decodeHTML(element);
        optionArray.push(decoded);
      });
      //Randomizing Options Array
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      shuffleArray(optionArray);
      // This element returns the question and their options.
      questElement = (
        <>
        

          {props.arr.length > 0 ? currentQuest : <h1>Loading</h1>}
          <div id={props.qid} className="all-inputs">
            {optionArray.map((item) => (
              <>
                <input
                  type="radio"
                  name={decodedAns}
                  value={item}
                  id={count}
                  onClick={props.handleClick}
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

  return (
    <>
      <FinalElement />
    </>
  );
}
