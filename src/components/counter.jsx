import { useState } from "react";

export default function Counter () {
    const [count, setCount] = useState(0);

    function handleClick (num, action) {
        if (action === "plus") {
            setCount(count => count + num)
        } else {
            setCount(count => count - num)
        }
    }
    return (
        <div className="grid gap-8 justify-items-center w-lvw">
            <h2>My Counter</h2>
            <div className="flex gap-8">
                <button onClick={() => handleClick(1, "plus")}>Plus 1</button>
                <button onClick={() => handleClick(3, "plus")}>Plus 3</button>
                <button onClick={() => handleClick(1, "minus")}>Minus 1</button>
            </div>
            <div className="text-2xl text-rose-600 font-bold">{count}</div>
        </div>
    )
}