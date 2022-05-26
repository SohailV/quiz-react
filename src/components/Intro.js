
import blob1 from "../assets/blob-top.png"
import blob2 from "../assets/blob-bottom.png"



export default function Intro() {
    return(
        <main>
            <img src={blob1} className="img-top" />
            <img src={blob2} className="img-bottom"/>
           <div className="intro-content">
                <h1> Quizzical </h1>
                <p> Let The Show Begin </p>
                <button>Start Quiz</button>
            </div>
        </main>
    );
}
