import React, { useState } from "react";
import Sresult from "./srresult";
import "./img.css";

const App = () => {

    const [data, Setdata] = useState("");

    const InputEvent = (event) => {
        const img = event.target.value;
        Setdata(img);

    }
    return ( < > < div className = "box" > <
        input type = "text"
        value = { data }
        placeholder = "search anything"
        onChange = { InputEvent }
        / ></div > < div className = "img" > <
        Sresult name = { data }
        / ></div > < / >
    )
}
export default App;