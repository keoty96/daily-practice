import Counter from "./components/counter";
import ToggeButton from "./components/toggleButton";
import Form from "./components/form";
import Button from "./components/button";
import TodoList from "./components/todo-list";
import { useState } from "react";

function App() {

  const [bgColor, setBgColor] = useState('#ffffff');

  function handleBgColor () {
    // Generate a random hex color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor)
  }

  return (
    <>
    <div style={{backgroundColor: bgColor}}>
       {/* <Counter />
      <ToggeButton />
      <Form />
      <Button text="Change Background Color" onClick={handleBgColor} /> */}
      <TodoList />
    </div>
    </>
  )
}

export default App
