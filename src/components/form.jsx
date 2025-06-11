import { useState } from "react";

export default function Form () {

    const [form, setForm] = useState({
        firstname: "",
        lastname: ""
    });

    function handleOnChange(property, value) {
        setForm({...form, [property]: value})
    }

    return(
        <div>
            <h2>Form</h2>
            <div>
                <label> 
                    Name
                    <input 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" 
                    value={form.name} onChange={(e) => handleOnChange("firstname", e.target.value)} />
                </label>
                <label> 
                    Last Name
                    <input 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" 
                    value={form.name} onChange={(e) => handleOnChange("lastname", e.target.value)} />
                </label>
            </div>
            <div className="mt-6 p-4 bg-gray-100 rounded-md">
                <h3 className="font-semibold mb-2">Current form state:</h3>
                <pre className="text-sm">{JSON.stringify(form, null, 2)}</pre>
            </div>
        </div>
    )
}