import Button from "./button";
import { useState } from "react";

export default function Counter () {
    const [count, setCount] = useState(0);

    const handleCount = (num, action) => {
        if (action === "plus") {
            setCount(count => count + num)
        } else {
            setCount(count => count - num)
        }
    }
    const handleReset = () => {
        setCount(0);
    }
    return (
        <div className="grid gap-8 justify-items-center w-lvw">
            <h2>My Counter</h2>
            <div className="flex gap-8">
                <Button text="+5" onClick={handleCount} onClickArgs={[5, "plus"]} />
                <Button text="+1" onClick={handleCount} onClickArgs={[1, "plus"]} />
                <Button text="-3" onClick={handleCount} onClickArgs={[5, "minus"]} />
            </div>
            <div className="flex gap-8">
                <Button text="Reset" onClick={handleReset} buttonColor="bg-red-600" hoverButtonColor="hover:bg-red-400" />
            </div>
            <div className="text-2xl text-rose-600 font-bold">{count}</div>
        </div>
    )
}