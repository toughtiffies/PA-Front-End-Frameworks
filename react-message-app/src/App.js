import { useState } from "react";

function App() {
    const [message, setMessage] = useState("Hello World");
    const [input, setInput] = useState("");

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>{message}</h2>
            <input
                type="text"
                placeholder="Message to Display"
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => setMessage(input)}>Display Message</button>
        </div>
    );
}

export default App;
