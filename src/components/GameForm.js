//tester file - this return would remain under the page h1 
//tester file - the purpose is to allow the user to start the game , When OK button in pressed, round 1 game will start
import { useNavigate } from "react-router-dom"

const GameForm = () => {
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault()
        navigate("/round1")
    }

    return (

        <form onSubmit={handleFormSubmit}>

            <h2>How To Play</h2>
            <h3>In a game there are <u>3 rounds</u>. Each round will have <u>10 questions.</u></h3>
            <p><b>Round 1: Guess The Name</b> - Look at the image and guess the name of the character, click "done".</p>
            <p><b>Round 2: Guess The TV Show</b> - Read the question and select the correct option, click "done".</p>
            <p><b>Round 3 (Final): Guess How Many Films</b> - Read the question and input correct quantity, click "done".</p>

            <button type="submit">OK</button>

        </form>
    )

}

export default GameForm;