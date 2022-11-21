import { useEffect, useState } from "react"

const Movie = () => {

    let [title,setTitle] = useState('')
    let [textInput,settextInput] = useState('')
    let [updateBtn,setupdateBtn] = useState(textInput)
    let [movie,setMovie] = useState([])
    
    useEffect(() => {

    })
    const handleInput = (event) => {
        settextInput(event.target.value)
    }

    const handleSubmit = () => {
        setupdateBtn(textInput)
    }

    return (
    <div>
        <h1>Movie</h1>
        <input type="text" value={textInput} onChange={handleInput}/>
        <button onClick={handleSubmit}>Search</button>
        <h1>{updateBtn}</h1>
    </div>
    )
        

}

export default Movie