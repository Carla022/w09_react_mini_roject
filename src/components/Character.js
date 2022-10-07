import { useState } from "react";


const Character = ({character}) => {

    const [stateCharacter, setStateCharacter] = useState({
        name: ""
    })

    const handleChange = (event) => {
        let PropertyName = event.target.name;
        let copiedCharacter = {...stateCharacter}
        copiedCharacter[PropertyName] = event.target.value;
        setStateCharacter(copiedCharacter);
    }

    return (
        <>
        <img src={character.imageUrl} />
        <form>
            <input
                type="text"
                placeholder="Enter Name"
                onChange={handleChange}
                value={stateCharacter.name}>  
            </input>
        </form>
        </>
    )


}

export default Character;