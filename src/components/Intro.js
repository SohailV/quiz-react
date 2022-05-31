import { Link } from "react-router-dom";

export default function Intro() {
    //Intro Page with link to Quiz Page.
    return(
        <main>
           <div className="intro-content">
                <h1 className="intro-header"> Quizzical </h1>
                <p className="tagline"> Let The Show Begin </p>
                <Link to="/Quiz" className="start-quiz" id="quiz-btn">Start Quiz</Link>
            </div>
        </main>
    );
}
