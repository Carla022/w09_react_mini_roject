import GameForm from "../components/GameForm";
import CharacterList from "../components/CharacterList";
import { useState, useEffect } from "react"; 
import {BrowserRouter, Router, Route, Link, Routes} from 'react-router-dom';



const GameContainer = () => {

    const [characters, setCharacters] = useState ([]) 

    const fetchData = async () => {
        const response = await fetch("https://api.disneyapi.dev/characters");
        const data = await response.json();
        setCharacters(data.data);
        console.log(data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const beginBtn = () => {
        console.log("hello world");
    }
    

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
          <button onClick = {beginBtn}>Begin!</button> 
        </div>

        <ul>
            <li>
                <Link to="/round1">Round 1</Link>
            </li>
            <li>
                <Link to="/round2">Round 2</Link>
            </li>
            <li>
                <Link to="/round3">Round 3</Link>
            </li>
        </ul>

        <Routes>
            <Route path="/round1" element={
                <CharacterList 
                    characters={characters}
                />}
            /> 

            <Route path="/round2" element={
                <CharacterList 
                    characters={characters}
                />}
            /> 

            <Route path="/round3" element={
                <CharacterList 
                    characters={characters}
                />}
            /> 

        </Routes>


        
        


      </div>
    </BrowserRouter>
    )

}

export default GameContainer;