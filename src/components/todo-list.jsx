import { useState } from "react";

export default function TodoList() {

    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddTask = () => {
        if (inputValue.trim() === "") return;
        setTasks([...tasks, {taskname: inputValue, done: false}]);
        setInputValue("");
    }

    const handleToggleDone = (index) => {
        const updateTask = tasks.map((task, i) => {
           return i === index ? {...task, done: !task.done } : task
        })
        setTasks(updateTask)
    }

    return(
        <div id="todo_list">
            <h1>My Todo List</h1>
            <div id="add-task">
                <input 
                    name="task-input"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} />
                <button 
                    className={`px-6 py-3 rounded-lg shadow-lg font-medium text-black transition-colors duration-200 bg-amber-600 hover:cursor-pointer`}
                    onClick={handleAddTask}>Add</button>
            </div>
            <div id="show-task">
                {tasks.map((item, index) => {
                    return(
                        <div key={index}>
                            <input 
                                onChange={() => handleToggleDone(index)}
                                type="checkbox" checked={item.done}/>
                            <label style={{ textDecoration: item.done ? "line-through" : "none" }}> {item.taskname} </label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}