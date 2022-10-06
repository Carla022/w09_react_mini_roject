import Round1List from "../components/Round1List";
import {BrowserRouter, } from 'react-router-dom';



const GameContainer = () => {


















    

    return (
        <BrowserRouter>
      <div className="App">
        <div>
          {/* title */}
          <h1><u>Ultimate DisneyFan Quiz!</u></h1>
          <h3>🤔<em> How much do you know . . ?</em></h3>
          
        </div>

        <div id='title-top'>
          <h2>How To Play</h2>
          <h3>In a game there are <u>3 rounds</u>. Each round will have <u>10 questions.</u></h3>
          <p><b>Round 1: Guess The Name</b> - Look at the image and guess the name of the character, click "done".</p>
          <p><b>Round 2: Guess The TV Show</b> - Read the question and select the correct option, click "done".</p>
          <p><b>Round 3 (Final): Guess How Many Films</b> - Read the question and input correct quantity, click "done".</p>
          {/* <button onClick>Begin!</button>  */}
        </div>
        


      </div>
    </BrowserRouter>
    )

}

export default GameContainer;