import { useState } from "react";

export default function ToggeButton () {

    const [toggleButton, setToggleButton] = useState(true);

    function handleClick() {
        setToggleButton(!toggleButton)
    }

    return(
        <div className="grid gap-8 justify-items-center w-lvw">
            <button onClick={handleClick}>Show Text</button>
            { toggleButton ? 
            <div>Show Text</div> : 
            <div>Hide Text</div>
            }
        </div>
    )

}