import { useState } from "react"

const Slider = () => {

    let [slider,setSlider] = useState(0)
    
    const handleChange = (event) => {
        setSlider(event.target.value)
        // console.log(event.target.value)
    }
    return (
    <div>
        <h1>Slider</h1>
        <input type="range" value={slider} onChange={handleChange} min='0' max='100'/>
        <input type="number" value={slider} onChange={handleChange} min='0' max='100'/>
    </div>
    )
        

}

export default Slider