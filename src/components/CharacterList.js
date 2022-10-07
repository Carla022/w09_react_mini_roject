import Character from './Character'

const CharacterList = ({characters}) => {

    const characterComponents = characters.map((character, index)  => {
        return <Character
                key={index}
                character={character}/>
    })

    return (
        <>
        <h3>Guess The Disney Character Name</h3>
        <hr />
        {characterComponents}
        </>
    )

}

export default CharacterList;